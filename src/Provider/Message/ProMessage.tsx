import React, { useState } from 'react';
import '../../Styles/MessageStyle.css';

interface Message {
    id: number;
    sender: 'student' | 'tutor';
    text: string;
    timestamp: Date;
}

const initialMessages: Message[] = [
    {
        id: 1,
        sender: 'tutor',
        text: 'Hello! How can I help you today?',
        timestamp: new Date(),
    },
];

const Message: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage: Message = {
            id: messages.length + 1,
            sender: 'student',
            text: input,
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
            <h2>Message Tutor</h2>
            <div style={{ minHeight: 200, marginBottom: 16, overflowY: 'auto', background: '#f9f9f9', padding: 8 }}>
                {messages.map(msg => (
                    <div key={msg.id} style={{ textAlign: msg.sender === 'student' ? 'right' : 'left', margin: '8px 0' }}>
                        <span
                            style={{
                                display: 'inline-block',
                                background: msg.sender === 'student' ? '#d1e7dd' : '#e2e3e5',
                                borderRadius: 12,
                                padding: '8px 12px',
                                maxWidth: '70%',
                                wordBreak: 'break-word',
                            }}
                        >
                            {msg.text}
                        </span>
                        <div style={{ fontSize: 10, color: '#888' }}>
                            {msg.timestamp.toLocaleTimeString()}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your message..."
                    style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                    onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                />
                <button onClick={handleSend} style={{ padding: '8px 16px', borderRadius: 4 }}>Send</button>
            </div>
        </div>
    );
};

export default Message;