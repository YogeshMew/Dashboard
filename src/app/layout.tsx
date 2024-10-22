// app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MobileSidebar from '@/components/MobileSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Modern Dashboard Implementation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Desktop Sidebar - hidden on mobile */}
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          
          {/* Mobile Sidebar - visible only on mobile */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>
          
          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}