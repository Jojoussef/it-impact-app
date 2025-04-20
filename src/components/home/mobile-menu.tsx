"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 text-gray-700" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-700" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-8 p-8 text-lg font-medium text-gray-700">
            <Link href="#services" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
            <Link href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <button className="mt-8 bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full transition-colors w-full max-w-xs">
              Login
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}
