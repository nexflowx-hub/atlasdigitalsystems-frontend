"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { company } from "@/config/company";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What products does Atlas sell?",
  "How do subscriptions work?",
  "What payment methods are supported?",
  "How can I contact sales?",
];

export function WebChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hi, I'm the Atlas Assistant. I can help with questions about our software, AI tools, automation products, pricing and services. How can I help you today?`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: nextHistory
            .filter((m) => !(m.role === "assistant" && m === messages[0]))
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply =
        data.reply ??
        data.error ??
        "I couldn't generate a response. Please try again or contact our support team.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm having trouble connecting right now. Please email ${company.emails.support} or call ${company.phone.display} and our team will help you.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-atlas-blue text-white shadow-lg transition-all hover:bg-atlas-blue-bright btn-glow",
          open && "rotate-90"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atlas-cyan opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-atlas-cyan" />
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-atlas-border bg-atlas-night shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-atlas-border bg-atlas-void/60 px-4 py-3.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-atlas-blue/20">
              <Sparkles className="h-4 w-4 text-atlas-cyan" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-atlas-night bg-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Atlas Assistant</p>
              <p className="text-[11px] text-atlas-muted">
                <span className="text-emerald-400">●</span> Online — typically replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-atlas-muted hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-atlas-void/30 p-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  m.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "rounded-br-sm bg-atlas-blue text-white"
                      : "rounded-bl-sm border border-atlas-border bg-atlas-card text-atlas-white"
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-atlas-border bg-atlas-card px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-atlas-cyan [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-atlas-cyan [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-atlas-cyan" />
                </div>
              </div>
            )}

            {/* Suggestions — only show at the start */}
            {messages.length === 1 && !loading && (
              <div className="space-y-1.5 pt-2">
                <p className="px-1 text-[11px] uppercase tracking-wider text-atlas-muted">
                  Suggested questions
                </p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-lg border border-atlas-border bg-atlas-card/50 px-3 py-2 text-left text-xs text-atlas-white/80 transition-colors hover:border-atlas-blue/40 hover:bg-atlas-blue/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-atlas-border bg-atlas-void/60 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              disabled={loading}
              className="flex-1 rounded-lg border border-atlas-border bg-atlas-deep px-3 py-2 text-sm text-white placeholder:text-atlas-muted/60 focus:border-atlas-blue/50 focus:outline-none focus:ring-1 focus:ring-atlas-blue/40 disabled:opacity-50"
              aria-label="Type your message"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-atlas-blue text-white transition-colors hover:bg-atlas-blue-bright disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Footer */}
          <div className="border-t border-atlas-border bg-atlas-void/40 px-4 py-2 text-center">
            <p className="text-[10px] text-atlas-muted">
              Powered by Atlas AI ·{" "}
              <a
                href={`mailto:${company.emails.support}`}
                className="text-atlas-cyan hover:underline"
              >
                {company.emails.support}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
