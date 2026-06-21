import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { IntentMatcher } from "../data/chatEngine";
import { intents } from "../data/chatIntents";
import { profile } from "../data/portfolioData";

const matcher = new IntentMatcher(intents);
const MATCH_THRESHOLD = 0.08;

const DEFAULT_SUGGESTIONS = [
  "What are your skills?",
  "Tell me about your experience",
  "Show me your projects",
  "How can I contact you?",
];

const FALLBACK =
  "I can only help with questions about Rahima's portfolio — her skills, experience, projects, education, certifications, or contact details. Try asking about one of those!";

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function answerFor(text) {
  const { id, score } = matcher.match(text);
  if (!id || score < MATCH_THRESHOLD) {
    return { text: FALLBACK, suggestions: DEFAULT_SUGGESTIONS };
  }
  const intent = intents.find((i) => i.id === id);
  return { text: intent.answer(), suggestions: intent.suggestions || DEFAULT_SUGGESTIONS };
}

export default function Chatbot({ open, onOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "bot",
      text: `Hi, I'm ${profile.name}'s portfolio assistant. Ask me anything about her skills, experience, or projects.`,
      suggestions: DEFAULT_SUGGESTIONS,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = { id: makeId(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    const delay = 380 + Math.random() * 420;
    setTimeout(() => {
      const { text: replyText, suggestions } = answerFor(trimmed);
      setMessages((m) => [
        ...m,
        { id: makeId(), role: "bot", text: replyText, suggestions },
      ]);
      setTyping(false);
    }, delay);
  }

  function handleSubmit(e) {
    e.preventDefault();
    send(input);
  }

  const lastBotMessage = [...messages].reverse().find((m) => m.role === "bot");

  return (
    <>
      {!open && (
        <button
          onClick={onOpen}
          aria-label="Open portfolio assistant"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent text-accent-fg pl-4 pr-5 py-3.5 shadow-[0_10px_30px_-10px_rgba(11,15,25,0.5)] hover:opacity-90 transition-colors"
        >
          <MessageCircle size={18} />
          <span className="font-mono text-sm hidden sm:inline">Ask me anything</span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] h-[100dvh] sm:h-[560px] sm:max-h-[80vh] bg-bg border border-line sm:rounded-xl shadow-[0_25px_60px_-15px_rgba(11,15,25,0.45)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-accent text-accent-fg shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent-fg/15 border border-accent-fg/30 flex items-center justify-center">
                <Sparkles size={16} className="text-accent-fg" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold leading-tight">
                  Portfolio Assistant
                </p>
                <p className="font-mono text-[11px] text-accent-fg/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-fg inline-block" />
                  Online · answers about Rahima
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="text-accent-fg/70 hover:text-accent-fg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto chat-scroll px-4 py-4 space-y-3 bg-bg-dim/50"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-accent text-accent-fg rounded-br-sm"
                      : "bg-bg border border-line text-fg rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-bg border border-line rounded-xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-fg-muted typing-dot" style={{ animationDelay: "0s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-fg-muted typing-dot" style={{ animationDelay: "0.15s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-fg-muted typing-dot" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {!typing && lastBotMessage?.suggestions?.length > 0 && (
            <div className="px-4 pt-3 pb-1 flex flex-wrap gap-2 border-t border-line bg-bg shrink-0">
              {lastBotMessage.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-line text-fg/70 hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-line bg-bg shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, experience…"
              className="flex-1 bg-bg-dim/70 border border-line rounded-full px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-full bg-accent text-accent-fg flex items-center justify-center disabled:opacity-30 hover:opacity-90 transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
