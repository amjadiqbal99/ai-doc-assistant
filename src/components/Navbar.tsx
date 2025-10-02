import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    SaaS Starter Kit
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/upload" className="text-gray-300 hover:text-white">
                        Upload
                    </Link>
                    <Link href="/search" className="text-gray-300 hover:text-white">
                        Search
                    </Link>
                    <Link href="/chat" className="text-gray-300 hover:text-white">
                        Chat
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;