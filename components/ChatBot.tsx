"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot, User, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

interface Message { from: "bot" | "user"; text: string }

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLang();

  // Reset & welcome when opening
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      setTimeout(() => setMessages([{ from: "bot", text: t.chatbot.welcome }]), 350);
    }
  }, [open, started, t.chatbot.welcome]);

  // Re-welcome on locale change while open
  useEffect(() => {
    if (started) {
      setMessages([{ from: "bot", text: t.chatbot.welcome }]);
      setTyping(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleQuestion = (q: { label: string; answer: string }) => {
    if (typing) return;
    setMessages((p) => [...p, { from: "user", text: q.label }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((p) => [...p, { from: "bot", text: q.answer }]);
    }, 1100);
  };

  return (
    <>
      {/* Bubble */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-13 h-13 sm:w-14 sm:h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-xl shadow-indigo-500/40 flex items-center justify-center transition-colors"
        style={{ width: 52, height: 52 }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{rotate:-90,opacity:0,scale:.5}} animate={{rotate:0,opacity:1,scale:1}} exit={{rotate:90,opacity:0,scale:.5}} transition={{duration:.18}}><X size={21}/></motion.span>
            : <motion.span key="chat" initial={{rotate:90,opacity:0,scale:.5}} animate={{rotate:0,opacity:1,scale:1}} exit={{rotate:-90,opacity:0,scale:.5}} transition={{duration:.18}}><MessageCircle size={21}/></motion.span>
          }
        </AnimatePresence>
        {!open && <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />}
      </motion.button>

      {/* Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:20, scale:.94 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:.94 }}
            transition={{ duration:.28, ease:[.22,1,.36,1] }}
            className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-24px)] max-w-[390px] max-h-[580px] flex flex-col bg-slate-950 border border-white/8 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 bg-slate-900/80 border-b border-white/5 flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-900" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">{t.chatbot.assistant}</p>
                <p className="text-emerald-400 text-xs">{t.chatbot.online}</p>
              </div>
              <Sparkles size={12} className="text-indigo-400 ml-auto flex-shrink-0" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-3 min-h-0">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:10, scale:.95 }}
                    animate={{ opacity:1, y:0, scale:1 }}
                    transition={{ duration:.25 }}
                    className={`flex items-end gap-2 ${msg.from==="user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.from==="bot" ? "bg-gradient-to-br from-indigo-600 to-violet-600" : "bg-slate-700"}`}>
                      {msg.from==="bot" ? <Bot size={13} className="text-white"/> : <User size={13} className="text-slate-300"/>}
                    </div>
                    <div className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.from==="bot" ? "bg-slate-800/80 text-slate-200 rounded-bl-sm" : "bg-indigo-600 text-white rounded-br-sm"}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {typing && (
                  <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="flex items-end gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center">
                      <Bot size={13} className="text-white"/>
                    </div>
                    <div className="bg-slate-800/80 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                      {[0,1,2].map(d=>(
                        <motion.span key={d} className="w-1.5 h-1.5 bg-slate-500 rounded-full"
                          animate={{y:[0,-5,0],opacity:[.4,1,.4]}}
                          transition={{duration:.7,repeat:Infinity,delay:d*.15}}/>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef}/>
            </div>

            {/* Quick questions */}
            {!typing && messages.length > 0 && (
              <div className="px-3 sm:px-4 pb-4 border-t border-white/5 pt-3 flex-shrink-0">
                <p className="text-slate-600 text-xs mb-2">{t.chatbot.quickLabel}</p>
                <div className="flex flex-col gap-1.5">
                  {t.chatbot.questions.map((q, i) => (
                    <motion.button
                      key={i}
                      initial={{opacity:0,x:-8}}
                      animate={{opacity:1,x:0}}
                      transition={{delay:i*.04}}
                      onClick={()=>handleQuestion(q)}
                      disabled={typing}
                      className="text-left text-xs text-slate-400 bg-slate-800/60 hover:bg-slate-700/60 hover:text-indigo-300 border border-white/5 hover:border-indigo-500/30 px-3 py-2 rounded-xl transition-all duration-200 disabled:opacity-40"
                    >
                      {q.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
