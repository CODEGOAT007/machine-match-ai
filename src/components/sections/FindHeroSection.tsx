import React from 'react'
import Link from 'next/link'

export function FindHeroSection() {
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
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Buying Used Machinery
            <br />
            <span className="gradient-text">Just Got Way Easier</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  text: 'Describe what you need in plain language.'
                },
                {
                  text: 'AI searches the entire market for matches.'
                },
                {
                  text: 'Select your preferred option.'
                },
                {
                  text: 'We can handle inspection and delivery.'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative p-6 px-4 rounded-lg bg-gray-800/30 border border-gray-700/50 shadow-lg shadow-black/25"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-md bg-yellow-500/90 text-black text-sm font-bold">
                      Step {index + 1}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-300 text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 