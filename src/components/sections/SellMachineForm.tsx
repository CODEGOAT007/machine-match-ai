import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../lib/firebase/config'
import { sendToSheets } from '../../lib/services/sheets'

interface SellMachineFormData {
  details: string
  timeline: string
  email: string
}

export function SellMachineForm() {
  const [formData, setFormData] = useState<SellMachineFormData>({
    details: '',
    timeline: '',
    email: ''
  })
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Send to Firestore
      await addDoc(collection(db, 'listings'), {
        ...formData,
        type: 'seller',
        timestamp: new Date().toISOString(),
        status: 'new'
      })

      // Send to Google Sheets
      await sendToSheets(formData, 'seller')

      alert('Thank you! We will be in touch soon.')
      setFormData({ details: '', timeline: '', email: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
    }
  }

  return (
    <div className="relative py-4">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold gradient-text">Sell Your Machine</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <textarea
              placeholder="Tell us about your machine..."
              value={formData.details}
              onChange={e => setFormData({ ...formData, details: e.target.value })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={6}
              className="flex-1"
              required
            />
            {isFocused && (
              <div className="w-48 shrink-0 text-sm text-gray-400">
                <p className="font-medium text-sky-400 mb-2">
                  Try to include:
                </p>
                <div className="space-y-2">
                  <div className="px-2 py-1 bg-gray-800/50 rounded border border-gray-700/50">Year/Make/Model</div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded border border-gray-700/50">Running/Under Power</div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded border border-gray-700/50">Location</div>
                  <div className="px-2 py-1 bg-gray-800/50 rounded border border-gray-700/50">Reason for Sale</div>
                </div>
              </div>
            )}
          </div>

          <div>
            <select
              value={formData.timeline}
              onChange={e => setFormData({ ...formData, timeline: e.target.value })}
              className={`w-full ${!formData.timeline ? 'text-gray-500' : 'text-gray-200'}`}
              required
            >
              <option value="" className="text-gray-500">When do you need it sold?</option>
              <option value="urgent" className="text-gray-200">Urgent (ASAP)</option>
              <option value="3months" className="text-gray-200">1-3 months</option>
              <option value="flexible" className="text-gray-200">Flexible</option>
            </select>
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
              required
            />
          </div>

          <div className="flex justify-center pt-4 pb-8">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              className="min-w-[160px]"
            >
              Submit
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 