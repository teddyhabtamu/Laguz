
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Loader2, MessageSquare, Cpu } from 'lucide-react';
import { chatWithLaguz } from '../services/geminiService';
import { Message } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Laguz Logic system online. **Strength beyond borders.** How can I assist with your logistical manifest?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await chatWithLaguz(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse || 'Connection Error: Satellite signal lost.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Protocol Failure. Resync required.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to render basic markdown patterns
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      let currentLine = line.trim();
      
      // Handle Headers ###
      if (currentLine.startsWith('###')) {
        const headerText = currentLine.replace(/^###\s*/, '');
        return (
          <h4 key={i} className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mt-4 md:mt-6 mb-2 md:mb-3 border-b border-slate-100 pb-1 italic font-jakarta">
            {headerText}
          </h4>
        );
      }

      let isBullet = false;
      if (currentLine.startsWith('* ')) {
        isBullet = true;
        currentLine = currentLine.substring(2);
      } else if (currentLine.startsWith('- ')) {
        isBullet = true;
        currentLine = currentLine.substring(2);
      } else if (currentLine === '•') {
        // Some responses send a single bullet character on its own line before the text
        return null; 
      }

      // Handle Bold **text**
      const segments = currentLine.split(/(\*\*.*?\*\*)/g);
      const content = segments.map((seg, j) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return <strong key={j} className="font-black text-slate-900">{seg.slice(2, -2)}</strong>;
        }
        return seg;
      });

      if (isBullet) {
        return (
          <div key={i} className="flex items-start space-x-1.5 md:space-x-2 my-1 md:my-1.5 pl-0.5 md:pl-1">
            <span className="text-cyan-500 mt-0.5 md:mt-1 flex-shrink-0 text-sm">•</span>
            <span className="flex-1 leading-relaxed text-[10px] md:text-xs">{content}</span>
          </div>
        );
      }
      
      return currentLine === '' ? <div key={i} className="h-1.5 md:h-2" /> : <p key={i} className="mb-1.5 md:mb-2 leading-relaxed text-[10px] md:text-xs">{content}</p>;
    }).filter(Boolean);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[70]">
      {isOpen ? (
        <div className="bg-white border border-slate-100 shadow-2xl w-[calc(100vw-2rem)] max-w-[380px] md:w-[380px] h-[calc(100vh-8rem)] md:h-[450px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-8 duration-500 teal-glow">
          <div className="bg-slate-900 p-4 md:p-5 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Cpu className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
              <span className="font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] italic font-jakarta">Laguz Assistant V.3</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1"><X className="w-5 h-5 hover:text-teal-400 transition-colors" /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3 md:space-y-4 bg-slate-50/50 font-sans text-[10px] md:text-[11px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[90%] p-3 md:p-4 shadow-sm rounded-sm ${
                  msg.role === 'user'
                  ? 'bg-slate-900 text-white font-bold italic'
                  : 'bg-white text-slate-600 border border-slate-200'
                }`}>
                  <span className={`block opacity-40 mb-1 md:mb-2 text-[7px] md:text-[8px] font-black tracking-widest ${msg.role === 'user' ? 'text-teal-400' : 'text-slate-400'}`}>
                    {msg.role === 'user' ? 'USER_INPUT' : 'SYSTEM_REPLY'}
                  </span>
                  <div className="text-[11px] md:text-xs leading-relaxed">
                    {msg.role === 'user' ? msg.text : renderFormattedText(msg.text)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="text-teal-600 flex items-center space-x-2 animate-pulse">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span className="uppercase tracking-widest text-[7px] md:text-[8px] font-black">Syncing Satellite Data...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 md:p-4 border-t border-slate-200 bg-white flex space-x-2 md:space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire status..."
              className="flex-1 bg-slate-50 border-none px-4 md:px-5 py-3 md:py-4 text-[11px] md:text-[10px] font-bold uppercase tracking-[0.3em] focus:ring-1 focus:ring-teal-500 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-slate-900 text-white p-3 md:p-4 hover:bg-teal-500 transition-all disabled:opacity-20 shadow-lg rounded-sm touch-manipulation"
            >
              <Send className="w-4 h-4 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 text-teal-400 px-4 py-3 md:px-8 md:py-5 shadow-2xl hover:bg-teal-500 hover:text-white transition-all flex items-center space-x-2 md:space-x-4 group rounded-full teal-glow touch-manipulation"
        >
          <span className="font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] italic font-jakarta">Laguz Intelligence</span>
          <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
