import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>MachineMatch AI - AI-Powered Machinery Matching</title>
        <meta name="description" content="Find or list industrial machinery with AI-powered matching" />
      </Head>
      <div className="min-h-screen flex flex-col select-none">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[var(--background)]/80 border-b border-gray-800/50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                <span className="gradient-text">MachineMatch</span>
                <span className="text-white text-[0.85em]">.AI</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/find-machine" className="text-sm text-gray-300 hover:text-sky-400 transition">
                Find a Machine
              </Link>
              <Link href="/sell-machine" className="text-sm text-gray-300 hover:text-sky-400 transition">
                Sell a Machine
              </Link>
              <Link 
                href="/dealer"
                className="inline-flex items-center text-sm px-4 py-2 rounded-lg bg-green-500/10 text-green-400 hover:text-green-300 hover:bg-green-500/20 transition border border-green-500/20"
              >
                Dealer? Apply Here
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800/50">
              <Link
                href="/find-machine"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                Find a Machine
              </Link>
              <Link
                href="/sell-machine"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                Sell a Machine
              </Link>
              <Link
                href="/dealer"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-green-300 hover:bg-green-500/10"
              >
                🌟 Dealer? Apply Here
              </Link>
            </div>
          </div>
        </header>

        <main className="pt-16 flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-800/50 py-6 bg-[var(--background)] mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} MachineMatch.AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 