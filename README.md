# Syeda Fiza Gilani's Portfolio

A personal portfolio site built with React and Vite, featuring a floating
chat assistant that answers questions about the projects, stack, and how
to get in touch — with spoken replies.

## Features
- Componentized sections: Nav, Hero, About, Projects, Contact, Footer.
- **Chat widget** (`ChatWidget.jsx`):
  - Click the toggle icon to open/close the full chat card (header,
    message history, input) — not just the icon.
  - Messages are sent to `/api/chat`, a Vercel serverless function that
    calls the Groq API with the key kept server-side.
  - Replies are read aloud via the Web Speech API, with a ring animation
    around the toggle button synced to the utterance's real `onstart`/
    `onend` events.
  - Mute toggle to turn spoken replies on/off.
- Ambient pulse animation behind the hero photo, built with
  compositor-only CSS (transform + opacity) for smooth performance.
- Project and stat content driven by small local data arrays, so adding
  one is a one-line edit.

## Tech stack
- React 18 + Vite 5
- Vanilla CSS (no framework)
- Groq API (chat completions)
- Web Speech API (voice replies)
- Vercel Serverless Functions
