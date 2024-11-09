import React from 'react'

export function PreviewSection() {
  return (
    <div className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-2 bg-gray-800/50 border-b border-gray-700/50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 text-sm text-gray-400">machine-match-ai</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 space-y-4 font-mono text-sm">
            <div className="flex items-start">
              <span className="text-sky-400 mr-2">$</span>
              <div className="flex-1">
                <span className="text-gray-300">find-machine</span>
                <span className="text-gray-500"> --type excavator --year 2020+</span>
              </div>
            </div>
            
            <div className="pl-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="animate-spin h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Searching global network...</span>
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-green-400">✓ Found 3 matches:</div>
                <div className="pl-4 text-gray-500">
                  • 2022 CAT 320 GC (Germany) - $185,000
                </div>
                <div className="pl-4 text-gray-500">
                  • 2021 Komatsu PC210LC-11 (USA) - $165,000
                </div>
                <div className="pl-4 text-gray-500">
                  • 2020 Hitachi ZX210LC-6 (Japan) - $155,000
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-sky-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </div>
  )
} 