import './globals.css'
import Link from 'next/link'
import { useState } from 'react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-900 to-red-900 min-h-screen text-white font-sans">
        <Navbar />
        <main className="pt-20 px-6">{children}</main>
      </body>
    </html>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-red-400 hover:text-red-500 transition">
          Nipu Edites
        </Link>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className={`md:flex gap-8 ${open ? 'block mt-4' : 'hidden md:flex'}`}>
          <Link href="/" className="block hover:text-red-400 transition py-2">
            Home
          </Link>
          <Link href="/about" className="block hover:text-red-400 transition py-2">
            About
          </Link>
          <Link href="/contact" className="block hover:text-red-400 transition py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
