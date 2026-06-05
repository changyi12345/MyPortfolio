import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    {
      name: 'gemini-api-proxy',
      configureServer(server) {
        server.middlewares.use('/api/gemini', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ error: 'Method Not Allowed' }))
            return
          }

          try {
            let body = ''
            for await (const chunk of req) {
              body += chunk
            }
            const payload = JSON.parse(body)
            const apiKey = process.env.GEMINI_API_KEY
            if (!apiKey || apiKey === 'YOUR_REAL_GEMINI_KEY') {
              res.setHeader('content-type', 'application/json')
              res.end(JSON.stringify({ text: '' }))
              return
            }

            let messages = payload.messages
            if (!Array.isArray(messages)) {
              if (!payload.prompt) {
                throw new Error('Either prompt or messages is required')
              }
              messages = [
                {
                  author: 'user',
                  content: {
                    type: 'text',
                    text: payload.prompt,
                  },
                },
              ]
            }

            const geminiRes = await fetch('https://gemini.googleapis.com/v1/models/gemini-1.5-pro/chat:generate', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                messages,
                temperature: 0.7,
                maxOutputTokens: 300,
              }),
            })

            const rawText = await geminiRes.text()
            let data = null
            if (rawText && rawText.trim().startsWith('<')) {
              throw new Error('Gemini returned HTML instead of JSON. Verify your API key and endpoint configuration.')
            }
            try {
              data = rawText ? JSON.parse(rawText) : null
            } catch (parseError) {
              throw new Error(`Gemini returned invalid JSON: ${parseError.message}`)
            }

            if (!geminiRes.ok) {
              const errorText = data?.error?.message || rawText || 'Gemini request failed'
              res.statusCode = geminiRes.status
              res.setHeader('content-type', 'application/json')
              res.end(JSON.stringify({ error: errorText }))
              return
            }

            const text = data?.candidates?.[0]?.content?.[0]?.text ?? data?.response?.output?.[0]?.content?.[0]?.text ?? ''
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ text }))
          } catch (error) {
            res.statusCode = 500
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ error: error.message }))
          }
        })
      },
    },
  ],
})