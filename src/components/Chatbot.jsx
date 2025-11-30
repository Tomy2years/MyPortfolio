import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

export const ChatBot = () => {
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            role: 'ai', 
            text: "Hi! I'm Tom's AI Chatbot. You can ask me about his research, his projects, or anything else related to his professional career!" 
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const scrollAreaRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            const scrollContainer = scrollAreaRef.current;
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userMessage: userMessage.text }),
            });

            const data = await response.json();

            setMessages(prev => [...prev, { 
                id: Date.now() + 1, 
                role: 'ai', 
                text: data.reply || "Sorry, I'm having trouble connecting to the brain right now." 
            }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages(prev => [...prev, { 
                id: Date.now() + 1, 
                role: 'ai', 
                text: "My connection timed out. Please try again!" 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="bg-gray-800/50 p-4 border-b border-white/10 flex items-center gap-3">
                <div className="p-2 bg-purple-600/20 rounded-full">
                    <Bot className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h3 className="font-semibold text-white">Tom GPT</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Online
                    </p>
                </div>
            </div>

            <div 
                ref={scrollAreaRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar scroll-smooth"
            >
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
                            ${msg.role === 'user' ? 'bg-purple-600' : 'bg-gray-700'}`}>
                            {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>

                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm 
                            ${msg.role === 'user' 
                                ? 'bg-purple-600 text-white rounded-tr-none' 
                                : 'bg-gray-800 text-gray-100 border border-white/10 rounded-tl-none'
                            }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                            <Bot size={16} />
                        </div>
                        <div className="bg-gray-800 p-4 rounded-2xl rounded-tl-none border border-white/10">
                            <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-gray-800/30 border-t border-white/10">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask for more info about Tom..."
                        className="flex-1 bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                    <button 
                        type="submit" 
                        disabled={isLoading || !input.trim()}
                        className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};