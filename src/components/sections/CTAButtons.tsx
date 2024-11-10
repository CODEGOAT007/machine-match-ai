import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'

export function CTAButtons() {
  return (
    <div className="relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 blur-[100px] opacity-20">
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sky-500 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 rounded-full" />
      </div>
      
      {/* Buttons container */}
      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-xl mx-auto py-4">
        <Link href="/find-machine" className="w-full sm:flex-1 sm:max-w-[260px]">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full group"
          >
            Find a Machine
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>
        </Link>
        
        <Link href="/sell-machine" className="w-full sm:flex-1 sm:max-w-[260px]">
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full group"
          >
            Sell a Machine
            <span className="ml-2 text-xl group-hover:translate-x-0.5 transition-transform">→</span>
          </Button>
        </Link>
      </div>
    </div>
  )
} 