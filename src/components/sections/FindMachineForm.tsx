import React, { useState } from 'react'
import { Button } from '../ui/Button'

interface FindMachineFormData {
  additionalDetails: string
  timeline: string
  email: string
}

export function FindMachineForm() {
  const [formData, setFormData] = useState<FindMachineFormData>({
    additionalDetails: '',
    timeline: '',
    email: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Add Firebase submission
  }

  return (
    <div className="relative py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold gradient-text">Find Your Machine</h2>
          <p className="text-gray-400 mt-2">Tell us what you're looking for</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              placeholder="Include as much detail as possible..."
              value={formData.additionalDetails}
              onChange={e => setFormData({ ...formData, additionalDetails: e.target.value })}
              rows={6}
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={e => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full"
              required
            >
              <option value="">When do you need it?</option>
              <option value="urgent">Urgent (ASAP)</option>
              <option value="3months">1-3 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Best Email
            </label>
            <input
              type="email"
              placeholder="Where can you receive quotes?"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
              required
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              className="min-w-[200px]"
            >
              Find Matches
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 