import React from 'react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 opacity-5">
          <div className="absolute inset-0 rotate-45 transform-gpu">
            <div className="absolute top-0 left-0 w-40 h-40 bg-sky-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs leading-6 text-gray-300 bg-blue-500/10 backdrop-blur-sm ring-1 ring-blue-400/20">
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-green-500 text-white rounded-full mr-2">FREE</span>
              For End Users{' '}
              <Link href="/dealer" className="inline-flex items-center ml-2 font-semibold text-blue-400">
                Dealer? Click here
                <span className="ml-1" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            The Fast Open-Source{' '}
            <span className="gradient-text">Machinery Matching</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            List or find industrial machinery for free. Let AI handle the complex matching 
            while you focus on what matters.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span className="flex items-center">
              <svg className="h-2.5 w-2.5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
              Free for End Users
            </span>
            <span className="mx-2">•</span>
            <span>Global Network</span>
            <span className="mx-2">•</span>
            <span>Secure Platform</span>
          </div>
        </div>
      </div>
    </div>
  )
} 