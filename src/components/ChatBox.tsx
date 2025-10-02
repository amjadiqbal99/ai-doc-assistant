import React, { useState } from 'react';
import { useChatContext } from '../hooks/useChatContext';

const ChatBox: React.FC = () => {
    const { messages, sendMessage } = useChatContext();
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
            <div className="flex-1 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`my-2 p-2 rounded ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex mt-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 border rounded-l-lg"
                    placeholder="Type your message..."
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBox;