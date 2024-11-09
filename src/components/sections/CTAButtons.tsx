import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/Button'

export function CTAButtons() {
  return (
    <div className="relative py-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 blur-[100px] opacity-20">
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sky-500 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 rounded-full" />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-200">
          I NEED TO
        </h2>
      </div>
      
      {/* Buttons container */}
      <div className="relative flex flex-row gap-4 justify-center items-center max-w-xl mx-auto px-4">
        <Link href="/search" className="flex-1 max-w-[240px]">
          <Button 
            variant="primary" 
            size="md" 
            className="w-full group"
          >
            Find a Machine
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>
        </Link>
        
        <Link href="/list" className="flex-1 max-w-[240px]">
          <Button 
            variant="secondary" 
            size="md" 
            className="w-full group"
          >
            Sell a Machine
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  )
} 