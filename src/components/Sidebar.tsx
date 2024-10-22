// Sidebar.tsx
'use client';

import Link from 'next/link';
import { Home, BarChart2, Settings, User, Menu } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        <Link 
          href="/" 
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <Home className="w-5 h-5 mr-3" />
          <span className="font-medium">Home</span>
        </Link>
        <Link 
          href="/analytics" 
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <BarChart2 className="w-5 h-5 mr-3" />
          <span className="font-medium">Analytics</span>
        </Link>
        <Link 
          href="/settings" 
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <Settings className="w-5 h-5 mr-3" />
          <span className="font-medium">Settings</span>
        </Link>
        <Link 
          href="/profile" 
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <User className="w-5 h-5 mr-3" />
          <span className="font-medium">User Profile</span>
        </Link>
      </nav>
    </div>
  );
}