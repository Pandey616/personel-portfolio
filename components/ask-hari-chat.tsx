"use client";

import { ArrowUpRight, Bot, Send, UserRound } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
  href?: string;
  linkLabel?: string;
};
const starters = [
  "What did Hari build at Maruti?",
  "What technologies does Hari use?",
  "What is Hari's React experience?",
];

export function AskHariChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I can answer concise, factual questions about Hari’s approved portfolio. Try asking about his experience, skills or education.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const question = input.trim();
    if (!question || loading) return;
    setInput("");
    setMessages((current) => [...current, { role: "user", content: question }]);
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.answer ??
            "That information is not available in the portfolio knowledge base.",
          href: data.href,
          linkLabel: data.linkLabel,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I could not reach the assistant right now. Please use the portfolio sections or contact Hari directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="panel overflow-hidden">
      <div className="border-b border-white/[.08] bg-white/[.025] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-signal/15 text-signal">
            <Bot size={18} />
          </span>
          <div>
            <p className="text-sm font-bold text-white">Ask Hari</p>
            <p className="text-xs text-slate-500">
              Grounded portfolio assistant
            </p>
          </div>
          <span className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[.12em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-signal" /> Available
          </span>
        </div>
      </div>
      <div className="max-h-[450px] min-h-[350px] space-y-4 overflow-y-auto p-5">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
          >
            <span
              className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${message.role === "user" ? "order-2 bg-white/[.08] text-slate-400" : "bg-signal/10 text-signal"}`}
            >
              {message.role === "user" ? (
                <UserRound size={14} />
              ) : (
                <Bot size={14} />
              )}
            </span>
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-white/[.08] text-slate-200" : "bg-signal/[.07] text-slate-300"}`}
            >
              <p>{message.content}</p>
              {message.href && (
                <Link
                  href={message.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-signal"
                >
                  {message.linkLabel ?? "Explore"}
                  <ArrowUpRight size={13} />
                </Link>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-signal/10 text-signal">
              <Bot size={14} />
            </span>
            <div className="rounded-2xl bg-signal/[.07] px-4 py-3 text-sm text-slate-500">
              Checking the approved knowledge base…
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-white/[.08] p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {starters.map((starter) => (
            <button
              key={starter}
              onClick={() => setInput(starter)}
              className="rounded-full border border-white/[.1] px-3 py-1.5 text-xs text-slate-400 hover:border-signal/50 hover:text-white focus-ring"
            >
              {starter}
            </button>
          ))}
        </div>
        <form onSubmit={submit} className="flex gap-2">
          <label className="sr-only" htmlFor="ask-hari-input">
            Ask a question
          </label>
          <input
            id="ask-hari-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="form-input"
            placeholder="Ask a factual question…"
            maxLength={500}
          />
          <button
            className="button button-primary min-h-12 w-12 shrink-0 p-0"
            aria-label="Send question"
            disabled={loading}
          >
            <Send size={17} />
          </button>
        </form>
      </div>
    </div>
  );
}
