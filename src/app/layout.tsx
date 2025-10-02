import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

const queryClient = new QueryClient();

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Toaster />
                {children}
            </div>
        </QueryClientProvider>
    );
};

export default Layout;