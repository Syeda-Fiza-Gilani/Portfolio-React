<div align="center">

# ✨ Syeda Fiza Gilani — Portfolio

### AI-Native Full-Stack Engineer &nbsp;|&nbsp; Enterprise RevOps & AI SaaS Architect

Bridging raw LLM capability with production full-stack apps and enterprise revenue operations —
memory-efficient backends, vector search, and human-in-the-loop automation for messy, real-world data.

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-000000?style=for-the-badge)](https://your-portfolio-url.vercel.app)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

</div>

<br/>

<!-- Replace this with a real screenshot or short GIF of the site (hero + chat widget open looks great) -->
<div align="center">
  <img width="1607" height="882" alt="image" src="https://github.com/user-attachments/assets/65cf0987-aab7-45dd-8668-4c20645bacde" />

</div>

<br/>

## 📖 Table of contents

- [About](#-about)
- [Features](#-features)
- [Tech stack](#-tech-stack)
- [Project structure](#-project-structure)
- [Getting started](#-getting-started)
- [Environment variables](#-environment-variables)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Connect](#-connect)
- [License](#-license)

<br/>

## 🧭 About

This is my personal portfolio — a single-page site built to showcase how I actually build,
not just list what I've used. It doubles as a live demo of a few things I care about:
**resource-conscious engineering**, **safe AI automation**, and **human-in-the-loop design**.

The site itself ships with a small AI assistant that knows my real background and projects,
answers questions about them, and **speaks its replies out loud** — built entirely on free
tiers and native browser APIs, with zero added infrastructure cost.

<br/>

## 🌟 Features

| | |
|---|---|
| 🎨 **Clean, responsive UI** | Built mobile-first with a restrained color system and Fraunces/Inter type pairing |
| 💓 **Ambient pulse animation** | Pure CSS, compositor-only (`transform`/`opacity`), so it stays smooth even on low-spec hardware |
| 🤖 **AI chat assistant** | Custom chat widget backed by the [Groq API](https://console.groq.com), proxied through a Vercel Serverless Function so the API key never reaches the browser |
| 🗣️ **Spoken replies** | Uses the native `window.speechSynthesis` Web Speech API — free, no extra API keys, zero rendering overhead |
| 💫 **Speaking-state animation** | The chat toggle ripples in real time for the exact duration of each spoken reply, tied to the utterance's actual `onstart`/`onend` events |
| 🚫 **Hallucination-guarded** | The assistant's system prompt is scoped to real facts only — if it doesn't know something about me, it says so instead of guessing |
| ⚡ **No heavy tooling** | Vite instead of Webpack/CRA — fast dev server, light build, easy on constrained machines |

<br/>

## 🛠 Tech stack

**Frontend**
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Backend / AI**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_API-F55036?style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel_Functions-000000?style=flat-square&logo=vercel&logoColor=white)

**Platform**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

<br/>

## 📁 Project structure

```
portfolio-react/
├── index.html              # Vite entry shell
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # composes the page
│   ├── styles.css             # design system + animations
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx            # ambient pulse behind the photo
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── ChatWidget.jsx      # toggle, Groq chat, voice replies
└── api/
    └── chat.js                 # Vercel Serverless Function (Groq proxy)
```

<br/>

## 🚀 Getting started

```bash
# 1. Clone the repo
git clone https://github.com/Syeda-Fiza-Gilani/Portfolio-React.git
cd Portfolio-React

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

> **Note:** the chat assistant needs the `/api/chat` serverless function, which Vite's plain
> dev server doesn't run. To test it locally, install the [Vercel CLI](https://vercel.com/docs/cli)
> and run `vercel dev` instead, with a local `.env` file (see below).

<br/>

## 🔑 Environment variables

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | Your free API key from [console.groq.com](https://console.groq.com). Used server-side only, inside `api/chat.js` — never exposed to the browser. |

<br/>

## ☁️ Deployment

Deployed on **Vercel** — zero config needed beyond the environment variable above.

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel auto-detects the Vite preset.
3. Add `GROQ_API_KEY` under **Settings → Environment Variables**.
4. Deploy 🎉

<br/>

## 🗺 Roadmap

- [ ] Add real screenshots / demo GIF to this README
- [ ] Write up full case studies for each featured project
- [ ] Contribute to Google Summer of Code 2027
- [ ] Add a lightweight analytics/feedback widget to the chat assistant



## 📄 License

This project is licensed under the [MIT License](./LICENSE) — feel free to fork it for your
own portfolio, just swap out the content for your own.

<br/>

<div align="center">
  <sub>Built with React, Vite, and a healthy respect for low-spec machines.</sub>
</div>
