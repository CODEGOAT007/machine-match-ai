import React from 'react'
import Link from 'next/link'
import { CTAButtons } from './CTAButtons'

export function HeroSection() {
  return (
    <div className="relative -mt-16">
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ transform: 'rotate(45deg)' }}>
            <div className="absolute top-0 left-0 w-40 h-40 bg-sky-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="flex flex-col items-center space-y-12">
          {/* Top Section - Credibility Statement */}
          <div className="text-center relative z-10 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              The World's Largest
              <br />
              <span className="gradient-text">AI-Powered</span>
              <br />
              Used Machinery Network
            </h2>
            <div className="mb-4 flex flex-wrap gap-4 justify-center text-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                <svg className="h-3 w-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" />
                </svg>
                Pan-American
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                <svg className="h-3 w-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" />
                </svg>
                Free for End-Users
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                <svg className="h-3 w-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" />
                </svg>
                Live Market Analytics
              </span>
            </div>
            <p className="text-gray-400 text-base sm:text-lg">
              Connecting buyers and sellers across North and South America through <span className="font-semibold text-gray-300">intelligent matching algorithms</span> and our <span className="font-semibold text-gray-300">integrated inspection & freight network</span>.
            </p>
          </div>

          {/* Bottom Section - I Need To... */}
          <div className="relative z-10 w-full max-w-xl">
            <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-2 text-gray-300">
                I need to...
              </h1>
              <CTAButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 