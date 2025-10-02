import { createContext, useContext, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { LangChainMemory } from '../lib/langchain/memory';

interface ChatContextType {
  messages: string[];
  sendMessage: (message: string) => void;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const memory = new LangChainMemory();

  const sendMessage = async (message: string) => {
    setMessages((prev) => [...prev, message]);
    // Integrate with LangChain and OpenAI API here
    const response = await memory.processMessage(message);
    setMessages((prev) => [...prev, response]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};