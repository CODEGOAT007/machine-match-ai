import React from 'react'
import Link from 'next/link'

export function SellHeroSection() {
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Selling Used Machinery
            <br />
            <span className="gradient-text">Just Got Way Easier</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
              {[
                {
                  step: '1',
                  title: 'Tell us what you have',
                  description: 'Describe your machinery in plain language'
                },
                {
                  step: '2',
                  title: 'AI Buyer Match',
                  description: 'Our AI connects you with active buyers'
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="relative p-6 px-4 rounded-lg bg-gray-800/30 border border-gray-700/50"
                >
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-medium">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 min-h-[56px] flex items-center justify-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 min-h-[40px] flex items-center justify-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 