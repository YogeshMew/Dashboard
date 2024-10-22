// components/MobileSidebar.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-gray-600"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800/50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
