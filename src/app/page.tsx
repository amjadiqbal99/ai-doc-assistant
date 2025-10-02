import React from 'react';
import { Navbar } from '../components/Navbar';
import { ChatBox } from '../components/ChatBox';
import { FileUploader } from '../components/FileUploader';
import { SearchBar } from '../components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Welcome to the SaaS Starter Kit</h1>
        <SearchBar />
        <FileUploader />
        <ChatBox />
      </main>
    </div>
  );
};

export default HomePage;