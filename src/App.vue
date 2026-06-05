<template>
  <!-- Navbar -->
  <div
    class="flex items-center justify-between px-4 sm:px-8 py-5 bg-[color:var(--card)] shadow-md sticky top-0 z-50"
  >
    <!-- Logo -->
    <div class="text-2xl font-bold text-[color:var(--accent)]">
      Portfolio
    </div>

    <!-- Menu -->
    <div class="flex items-center gap-4 md:gap-7">
      <ul class="hidden md:flex gap-5">
        <li>
          <a
            href="#home"
            @click="closeMobileMenu"
            class="px-4 py-2 text-white transition bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            @click="closeMobileMenu"
            class="px-4 py-2 text-white transition bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            @click="closeMobileMenu"
            class="px-4 py-2 text-white transition bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            @click="closeMobileMenu"
            class="px-4 py-2 text-white transition bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            @click="closeMobileMenu"
            class="px-4 py-2 text-white transition bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]"
          >
            Contact
          </a>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-3 rounded-full border border-[color:var(--accent)]/10 bg-[color:var(--card)] p-2">
        <button
          @click="toggleDark"
          class="px-3 py-2 rounded-full border border-[color:var(--accent)]/20 bg-[color:var(--card)] text-[color:var(--text)] text-sm transition hover:border-[color:var(--accent)]"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>

        <div class="flex items-center gap-2 pr-1">
          <span class="text-sm font-medium text-[color:var(--text)]">Theme</span>
          <div class="flex items-center gap-2">
            <button
              v-for="themeName in themes"
              :key="themeName"
              @click="setTheme(themeName)"
              :class="[
                'w-8 h-8 rounded-full border shadow-sm',
                theme === themeName ? 'ring-2 ring-[color:var(--accent)] ring-offset-2' : 'border-[color:var(--card)]'
              ]"
              :style="{ backgroundColor: themeColors[themeName] }"
              :title="themeName.charAt(0).toUpperCase() + themeName.slice(1)"
            ></button>
          </div>
        </div>
      </div>

      <button @click="toggleMobileMenu" class="md:hidden inline-flex flex-col justify-center gap-1.5 p-2 rounded-md bg-[color:var(--card)] border border-[color:var(--accent)]/20 text-[color:var(--text)] shadow-sm">
        <span class="block h-0.5 w-5 bg-[color:var(--text)]"></span>
        <span class="block h-0.5 w-5 bg-[color:var(--text)]"></span>
        <span class="block h-0.5 w-5 bg-[color:var(--text)]"></span>
      </button>
    </div>
    <div v-if="mobileMenu">
      <div class="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm" @click="closeMobileMenu"></div>
      <div class="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl border border-[color:var(--card)] bg-[color:var(--card)] p-4 shadow-2xl">
        <div @click="closeMobileMenu" class="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[color:var(--accent)]/40 cursor-pointer"></div>
        <div class="mb-3 flex items-center justify-between">
          <button
            @click="toggleDark"
            class="px-3 py-2 text-sm rounded-full border border-[color:var(--accent)]/20 bg-[color:var(--card)] text-[color:var(--text)]"
          >
            {{ isDark ? 'Light' : 'Dark' }}
          </button>

          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <template v-for="themeName in themes" :key="themeName">
                <button
                  @click="setTheme(themeName)"
                  :class="[
                    'w-7 h-7 rounded-full border',
                    theme === themeName ? 'ring-2 ring-[color:var(--accent)] ring-offset-2' : 'border-[color:var(--card)]'
                  ]"
                  :style="{ backgroundColor: themeColors[themeName] }"
                ></button>
              </template>
            </div>
          </div>
        </div>
        <div class="space-y-3">
          <a href="#home" @click="closeMobileMenu" class="block px-4 py-3 rounded-2xl bg-[color:var(--accent)] text-white text-center">Home</a>
          <a href="#about" @click="closeMobileMenu" class="block px-4 py-3 rounded-2xl bg-[color:var(--accent)] text-white text-center">About</a>
          <a href="#skills" @click="closeMobileMenu" class="block px-4 py-3 rounded-2xl bg-[color:var(--accent)] text-white text-center">Skills</a>
          <a href="#projects" @click="closeMobileMenu" class="block px-4 py-3 rounded-2xl bg-[color:var(--accent)] text-white text-center">Projects</a>
          <a href="#contact" @click="closeMobileMenu" class="block px-4 py-3 rounded-2xl bg-[color:var(--accent)] text-white text-center">Contact</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Hero -->
  <main id="home" class="px-4 sm:px-8 py-16 text-center bg-[color:var(--bg)] min-h-screen">
    <h1 class="text-5xl font-bold text-[color:var(--text)] animate-fade-up">
      Welcome to My Portfolio
    </h1>

    <h2 class="mt-4 text-3xl font-semibold text-[color:var(--accent)] dark:text-[color:var(--accent-dark)] title-underline animate-fade-up" style="animation-delay:120ms;">
      Chan Pyae Aung
    </h2>

    <p class="mt-2 text-lg text-[color:var(--muted)]">
      Full Stack Web Developer
    </p>

      <img
        :src="profilePic"
      alt="Profile Picture"
      class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mt-8 border-4 border-[color:var(--accent)] rounded-full shadow-lg object-cover"
      loading="lazy"
      decoding="async"
    />

    <p class="max-w-xl mx-auto mt-6 text-[color:var(--muted)]">
      Explore my projects and skills in web development.
      I build modern websites and web applications using
      Vue.js, Laravel, PHP, Tailwind CSS, and Python.
    </p>

    <button
      class="px-6 py-3 mt-8 font-medium text-white transition bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]"
    >
      View Projects
    </button>
    <!-- Demo code block styled like VS Code -->
        <div class="mt-6 code-editor">
          <div class="toolbar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code v-html="typedHtml"></code><span class="caret">▌</span></pre>
        </div>

        <section id="chat" class="mt-10 max-w-4xl mx-auto rounded-3xl border border-[color:var(--card)] bg-[color:var(--card)] p-6 shadow-sm">
          <h3 class="text-2xl font-semibold text-[color:var(--text)]">Chat Bot</h3>
          <p class="mt-2 text-[color:var(--muted)]">Ask about my skills, experience, or portfolio details in Burmese.</p>

          <div class="mt-6 space-y-4 rounded-3xl border border-[color:var(--accent)]/10 bg-[color:var(--bg)] p-4">
            <div v-for="(message, index) in chatMessages" :key="index" :class="message.role === 'assistant' ? 'bg-[color:var(--card)] rounded-3xl p-4' : 'bg-[color:var(--accent)]/10 rounded-3xl p-4'">
              <div class="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">{{ message.role === 'assistant' ? 'AI' : 'သင်' }}</div>
              <div class="mt-2 text-[color:var(--text)] whitespace-pre-line">{{ message.text }}</div>
            </div>
          </div>

          <form @submit.prevent="sendChatMessage" class="mt-5 space-y-4">
            <textarea
              v-model="chatInput"
              class="w-full p-4 border rounded-2xl bg-[color:var(--bg)] text-[color:var(--text)]"
              rows="4"
              placeholder="မေးစရာကို ယခု ရေးပါ..."
            ></textarea>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="submit"
                :disabled="chatLoading || !chatInput.trim()"
                class="px-6 py-3 font-medium text-white rounded-lg bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)] transition disabled:opacity-50"
              >
                {{ chatLoading ? 'Loading...' : 'Send Message' }}
              </button>
              <span class="text-sm text-[color:var(--muted)]">Chat bot အမြန်စိတ်ဖြင့် ပြန်ပြောပါ။</span>
            </div>
          </form>
        </section>
      </main>
  <!-- About -->
  <section id="about" class="px-4 sm:px-8 py-16 bg-[color:var(--bg)]">
    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 class="text-3xl font-semibold text-[color:var(--text)]">About Me</h3>
        <p class="mt-4 text-[color:var(--muted)]">I'm Chan Pyae Aung, a full-stack developer building modern web applications. I focus on clean, maintainable code and delightful user experiences.</p>
        <p class="mt-4 text-[color:var(--muted)]">I work with Vue.js, Laravel, PHP, Tailwind CSS and Python to deliver production-ready apps.</p>
        <div class="mt-6 space-y-3 bg-[color:var(--card)] border border-[color:var(--accent)]/20 rounded-2xl p-5 shadow-sm">
          <h4 class="text-xl font-semibold text-[color:var(--text)]">Certificates</h4>
          <div class="space-y-3">
            <button type="button" v-for="cert in certificates" :key="cert.title" @click="openCertificate(cert)" class="w-full text-left rounded-lg bg-[color:var(--bg)] p-4 border border-[color:var(--card)] hover:border-[color:var(--accent)] transition">
              <div class="font-semibold text-[color:var(--text)]">{{ cert.title }}</div>
              <div class="text-sm text-[color:var(--muted)]">{{ cert.issuer }} · {{ cert.year }}</div>
              <div class="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">View certificate</div>
            </button>
          </div>
        </div>
        
      </div>
      <div>
        <img :src="profilePic" alt="Profile" class="w-full rounded-lg shadow-md object-cover h-64" />
      </div>
    </div>
  </section>

  <div v-if="selectedCert" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
    <div class="relative w-full max-w-xl rounded-3xl bg-[color:var(--card)] shadow-2xl overflow-hidden max-h-[85vh]">
      <button @click="closeCertificate" class="absolute top-3 right-3 rounded-full bg-[color:var(--card)]/90 p-2 text-[color:var(--text)] shadow hover:bg-[color:var(--accent)]/10">✕</button>
      <div class="p-4">
        <div class="mb-3 text-lg font-semibold text-[color:var(--text)]">{{ selectedCert.title }}</div>
        <div class="mb-4 text-sm text-[color:var(--muted)]">{{ selectedCert.issuer }} · {{ selectedCert.year }}</div>
        <img :src="selectedCert.image" :alt="selectedCert.title" class="w-full rounded-3xl border border-[color:var(--card)] bg-[color:var(--bg)] object-contain" />
      </div>
    </div>
  </div>

  <!-- Skills -->
  <section id="skills" class="px-4 sm:px-8 py-16 bg-[color:var(--bg)]">
    <div class="max-w-5xl mx-auto">
      <h3 class="text-3xl font-semibold text-[color:var(--text)] text-center title-underline">Skills</h3>
      <div class="mt-8 max-w-2xl mx-auto">
        <div class="space-y-4">
          <div v-for="s in skills" :key="s.name" class="">
            <div class="flex items-center justify-between mb-1">
              <div class="text-sm font-medium text-[color:var(--text)]">{{ s.name }}</div>
              <div class="text-sm text-[color:var(--muted)]">{{ s.pct }}%</div>
            </div>
            <div class="w-full bg-[color:var(--card)] rounded-full h-3">
              <div class="h-3 rounded-full" :style="{ width: s.pct + '%', background: 'linear-gradient(90deg, var(--accent), var(--accent-dark))' }" role="progressbar" :aria-valuenow="s.pct" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="px-4 sm:px-8 py-16 bg-[color:var(--bg)]">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h3 class="text-3xl font-semibold text-[color:var(--text)] title-underline">Projects</h3>
          <p class="mt-3 text-[color:var(--muted)] max-w-2xl">A few recent web apps and portfolio projects built with modern frontend and backend tools.</p>
        </div>
      </div>
      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <div v-for="project in projects" :key="project.name" class="rounded-3xl border border-[color:var(--card)] bg-[color:var(--card)] p-6 shadow-sm hover:shadow-md transition">
          <div class="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{{ project.type }}</div>
          <h4 class="mt-4 text-xl font-semibold text-[color:var(--text)]">{{ project.name }}</h4>
          <p class="mt-3 text-[color:var(--muted)]">{{ project.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.tech" :key="project.name + tech" class="rounded-full bg-[color:var(--accent)]/10 px-3 py-1 text-xs font-medium text-[color:var(--accent)]">{{ tech }}</span>
          </div>
          <a :href="project.link" target="_blank" rel="noreferrer" class="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-dark)]">View project</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="cv" class="px-4 sm:px-8 py-16 bg-[color:var(--bg)]">
    <div class="max-w-3xl mx-auto">
      <h3 class="text-3xl font-semibold text-[color:var(--text)] text-center">Download CV</h3>
      <p class="mt-4 text-center text-[color:var(--muted)]">Fill in your details and download my CV instantly.</p>
      <div class="mt-8 grid gap-4">
        <input v-model="cvName" class="p-3 border rounded-lg bg-[color:var(--card)] text-[color:var(--text)]" type="text" placeholder="Name" />
        <input v-model="cvEmail" class="p-3 border rounded-lg bg-[color:var(--card)] text-[color:var(--text)]" type="email" placeholder="Email" />
        <textarea v-model="cvMessage" class="p-3 border rounded-lg bg-[color:var(--card)] text-[color:var(--text)]" rows="4" placeholder="Optional message"></textarea>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button type="button" @click="submitCvForm" class="px-6 py-3 font-medium text-white rounded-lg bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)] transition">
            Download CV
          </button>
          <span class="text-sm text-[color:var(--muted)]">You will receive the CV file immediately.</span>
        </div>
        <div v-if="cvSubmitted" class="rounded-2xl border border-[color:var(--accent)]/10 bg-[color:var(--card)] p-4 text-[color:var(--text)]">
          Thank you, {{ cvName }}! Your CV download should start. If it doesn't, <a class="text-[color:var(--accent)] underline" href="/cv.pdf" download="Chan_Pyae_Aung_CV.pdf">click here</a>.
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="px-4 sm:px-8 py-16 bg-[color:var(--bg)]">
    <div class="max-w-3xl mx-auto">
      <h3 class="text-3xl font-semibold text-[color:var(--text)] text-center">Contact</h3>
      <form class="mt-8 grid gap-4">
        <input class="p-3 border rounded-lg bg-[color:var(--card)] text-[color:var(--text)]" type="text" placeholder="Name" />
        <input class="p-3 border rounded-lg bg-[color:var(--card)] text-[color:var(--text)]" type="email" placeholder="Email" />
        <textarea class="p-3 border rounded-lg bg-[color:var(--card)] text-[color:var(--text)]" rows="5" placeholder="Message"></textarea>
        <div class="text-center">
          <button class="px-6 py-3 mt-2 font-medium text-white bg-[color:var(--accent)] rounded-lg hover:bg-[color:var(--accent-dark)]">Send Message</button>
        </div>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="px-4 sm:px-8 py-6 bg-[color:var(--card)]">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-sm text-[color:var(--muted)]">&copy; {{ year }} Chan Pyae Aung. All rights reserved.</div>
      <div class="text-sm text-[color:var(--muted)]">Code By-KageRaN</div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import profilePic from './assets/images/myprofile.jpg'
import cert1 from './assets/cert1.svg'
import cert2 from './assets/cert2.svg'
import cert3 from './assets/cert3.svg'

const year = new Date().getFullYear()

const mobileMenu = ref(false)
const themes = ['indigo', 'emerald', 'rose', 'amber', 'slate']
const theme = ref('indigo')
const isDark = ref(false)
const themeColors = {
  indigo: '#6366f1',
  emerald: '#10b981',
  rose: '#f43f5e',
  amber: '#f59e0b',
  slate: '#64748b',
}

function loadSavedThemeSettings() {
  try {
    const storedTheme = localStorage.getItem('portfolio-theme')
    const storedDark = localStorage.getItem('portfolio-dark')
    if (storedTheme && themes.includes(storedTheme)) {
      theme.value = storedTheme
    }
    if (storedDark !== null) {
      isDark.value = storedDark === 'true'
    }
  } catch (e) {
    // ignore localStorage errors
  }
}

function applyTheme() {
  const root = document.documentElement
  root.classList.toggle('dark', isDark.value)
  themes.forEach((themeName) => {
    root.classList.toggle(`theme-${themeName}`, theme.value === themeName)
  })
}

function setTheme(themeName) {
  theme.value = themeName
  try {
    localStorage.setItem('portfolio-theme', themeName)
  } catch (e) {
    // ignore localStorage errors
  }
  applyTheme()
}

function toggleDark() {
  isDark.value = !isDark.value
  try {
    localStorage.setItem('portfolio-dark', String(isDark.value))
  } catch (e) {
    // ignore localStorage errors
  }
  applyTheme()
}

function toggleMobileMenu() {
  mobileMenu.value = !mobileMenu.value
}

function closeMobileMenu() {
  mobileMenu.value = false
}

const skills = [
  { name: 'HTML', pct: 95 },
  { name: 'CSS', pct: 90 },
  { name: 'Java', pct: 60 },
  { name: 'PHP', pct: 40 },
  { name: 'Bootstrap', pct: 85 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'Python', pct: 30 },
]

const certificates = [
  { title: 'Vue.js Fundamentals', issuer: 'Vue Mastery', year: '2024', image: cert1 },
  { title: 'Full Stack Web Development', issuer: 'Coursera', year: '2023', image: cert2 },
  { title: 'Tailwind CSS Professional', issuer: 'Frontend Masters', year: '2024', image: cert3 },
]

const projects = [
  { name: 'Portfolio Site', description: 'A responsive portfolio website with Vue 3, Tailwind CSS, and smooth interactions.', tech: ['Vue', 'Tailwind', 'Vite'], link: 'https://example.com/portfolio', type: 'Web App' },
  { name: 'Task Manager', description: 'A task tracking app with filters, local storage, and polished UI.', tech: ['Vue', 'Pinia', 'CSS'], link: 'https://example.com/tasks', type: 'Productivity' },
  { name: 'Landing Page', description: 'A modern marketing landing page with animated sections and contact form.', tech: ['HTML', 'CSS', 'JavaScript'], link: 'https://example.com/landing', type: 'Design' },
]

const selectedCert = ref(null)

function openCertificate(cert) {
  selectedCert.value = cert
}

function closeCertificate() {
  selectedCert.value = null
}

const demoCode = `const name = 'world'
const greet = () => console.log(\`Hello, \${name}!\`)
greet()
const colors = ['blue', 'purple']
console.log(colors.join(' -> '))`

const typed = ref('')
const typedHtml = computed(() => {
  const escaped = typed.value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const withStrings = escaped.replace(/('.*?'|".*?"|`.*?`)/g, '<span class="code-string">$1</span>')
  const withKeywords = withStrings.replace(/\b(const|let|var|function|return|console|log|=>|const|Array|join)\b/g, '<span class="code-keyword">$1</span>')
  const withNumbers = withKeywords.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
  return withNumbers
})

const systemPrompt = 'You are a helpful Burmese chatbot for Chan Pyae Aung, a full stack web developer with Vue.js, Tailwind CSS, Laravel, PHP, and Python skills. Answer questions warmly and clearly about his experience, projects, and portfolio.'
const chatMessages = ref([
  { role: 'assistant', text: 'မင်္ဂလာပါ! ကျွန်တော့်အကြောင်း မေးမြန်းနိုင်ပါတယ်။' },
])
const chatInput = ref('')
const chatLoading = ref(false)
const chatError = ref('')
const cvName = ref('')
const cvEmail = ref('')
const cvMessage = ref('')
const cvSubmitted = ref(false)

function downloadCvFile() {
  const link = document.createElement('a')
  link.href = '/cv.pdf'
  link.download = 'Chan_Pyae_Aung_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

async function submitCvForm() {
  cvSubmitted.value = true
  downloadCvFile()
}

async function sendChatMessage() {
  if (!chatInput.value.trim()) return
  chatError.value = ''
  chatLoading.value = true
  chatMessages.value.push({ role: 'user', text: chatInput.value.trim() })

  try {
    const messages = [
      { author: 'system', content: { type: 'text', text: systemPrompt } },
      ...chatMessages.value.map((message) => ({
        author: message.role === 'assistant' ? 'assistant' : 'user',
        content: {
          type: 'text',
          text: message.text,
        },
      })),
    ]

    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    })

    const raw = await response.text()
    let data = null
    try {
      data = raw ? JSON.parse(raw) : null
    } catch (parseError) {
      throw new Error(`Invalid JSON response from API: ${parseError.message}`)
    }

    if (!response.ok) {
      throw new Error(data?.error || raw || 'Gemini request failed')
    }

    const text = data?.text || 'No response returned from Gemini.'
    chatMessages.value.push({ role: 'assistant', text })
    chatInput.value = ''
  } catch (error) {
    chatError.value = error.message
  } finally {
    chatLoading.value = false
  }
}

let stopTyping = false

async function sleep(ms){ return new Promise(r=>setTimeout(r, ms)) }

async function runTypingLoop(){
  stopTyping = false
  const chars = demoCode.split('')
  while(!stopTyping){
    // type
    typed.value = ''
    for(let i=0;i<chars.length && !stopTyping;i++){
      typed.value += chars[i]
      await sleep(18 + Math.floor(Math.random()*12))
    }
    if(stopTyping) break
    await sleep(1000)
    // delete
    for(let i=chars.length;i>0 && !stopTyping;i--){
      typed.value = typed.value.slice(0, i-1)
      await sleep(8)
    }
    await sleep(400)
  }
}

onUnmounted(()=>{ stopTyping = true })

onMounted(() => {
  loadSavedThemeSettings()
  applyTheme()
  runTypingLoop()
})
</script>
