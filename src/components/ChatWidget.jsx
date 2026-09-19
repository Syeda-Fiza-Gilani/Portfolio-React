import { useEffect, useRef, useState } from "react";

/* ==========================================================================
   CHAT WIDGET
   --------------------------------------------------------------------------
   - Click to open/close (the "toggle chat card" behaviour).
   - Replies come from this site's own /api/chat serverless function, which
     holds the real Groq API key server-side (see api/chat.js) — the browser
     never sees it.
   - Replies are spoken aloud with the native Web Speech API. The little
     ring animation around the toggle button only plays for as long as an
     utterance is actually being spoken — driven by the utterance's real
     `onstart`/`onend` events, not a fixed-length animation.
   ========================================================================== */

const GREETING = {
  id: "greeting",
  role: "bot",
  text: "Hi! I'm a small assistant standing in for Syeda Fiza Gilani. Ask me about the projects, the stack used here, or how to get in touch.",
};

function pickNaturalVoice() {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const preferredNames = [
    "Google US English",
    "Google UK English Female",
    "Microsoft Aria Online (Natural)",
    "Microsoft Jenny Online (Natural)",
    "Samantha", // macOS/iOS
  ];

  for (const name of preferredNames) {
    const match = voices.find((v) => v.name.includes(name));
    if (match) return match;
  }

  return voices.find((v) => v.lang && v.lang.startsWith("en")) || voices[0];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [history, setHistory] = useState([]); // role/content turns sent to the API
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const inputRef = useRef(null);
  const messagesRef = useRef(null);
  const cachedVoiceRef = useRef(null);

  // Load the voice list once, and again whenever the browser updates it —
  // some browsers populate this asynchronously.
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    cachedVoiceRef.current = pickNaturalVoice();
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoiceRef.current = pickNaturalVoice();
    };
  }, []);

  // Keep the message list scrolled to the latest turn.
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus the input whenever the panel opens.
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function speak(text) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = cachedVoiceRef.current || pickNaturalVoice();
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    // The ring animation is tied directly to these two events, so it only
    // plays for the actual duration of the spoken reply.
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  async function askAssistant(nextHistory) {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: nextHistory }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Request failed: ${response.status}`);
    }

    return data.reply || "I'm not sure how to answer that.";
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const text = input.trim();
    if (!text || isSending) return;

    const userMessage = { id: crypto.randomUUID(), role: "user", text };
    const nextHistory = [...history, { role: "user", content: text }];

    setMessages((prev) => [...prev, userMessage]);
    setHistory(nextHistory);
    setInput("");
    setIsSending(true);
    setIsTyping(true);

    try {
      const reply = await askAssistant(nextHistory);
      setHistory((prev) => [...prev, { role: "assistant", content: reply }]);
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "bot", text: reply }]);
      if (voiceEnabled) speak(reply);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: "Sorry — I couldn't reach the assistant just now. Please try again in a moment, or email Fiza directly.",
        },
      ]);
    } finally {
      setIsTyping(false);
      setIsSending(false);
      inputRef.current?.focus();
    }
  }

  function toggleMute() {
    setVoiceEnabled((prev) => {
      const next = !prev;
      if (!next) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      return next;
    });
  }

  return (
    <div className="chat" id="chat">
      {/* The rings are dormant (opacity: 0, no animation) until isSpeaking is
          true — see the .chat__orb.is-speaking rule in styles.css. */}
      <div className={`chat__orb${isSpeaking ? " is-speaking" : ""}`}>
        <span className="chat__ring"></span>
        <span className="chat__ring"></span>
        <span className="chat__ring"></span>
        <button
          className="chat__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="chatPanel"
          aria-label="Open chat assistant"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg className="chat__icon chat__icon--open" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1Z" />
          </svg>
          <svg className="chat__icon chat__icon--close" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path fill="currentColor" d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className="chat__panel"
        id="chatPanel"
        role="dialog"
        aria-label="Chat with Fiza's assistant"
        hidden={!isOpen}
      >
        <header className="chat__header">
          <div>
            <p className="chat__title">Ask me anything</p>
            <p className="chat__subtitle">{voiceEnabled ? "Voice replies on" : "Voice replies off"}</p>
          </div>
          <button
            className="chat__mute"
            type="button"
            aria-pressed={!voiceEnabled}
            title="Toggle spoken replies"
            onClick={toggleMute}
          >
            {voiceEnabled ? "🔊" : "🔇"}
          </button>
        </header>

        <div className="chat__messages" ref={messagesRef} aria-live="polite">
          {messages.map((msg) => (
            <div className={`msg msg--${msg.role}`} key={msg.id}>
              {msg.text}
            </div>
          ))}
          {isTyping && <div className="msg msg--bot msg--typing">Typing…</div>}
        </div>

        <form className="chat__form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="chat__input"
            placeholder="Type a message…"
            autoComplete="off"
            aria-label="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isSending}
          />
          <button type="submit" className="chat__send" aria-label="Send message">
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}
