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
    <div className="relative py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold gradient-text">Sell Your Machine</h2>
          <p className="text-gray-400 mt-2">Tell us about your machinery</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              placeholder="Tell us about your machine... (year, make, model, condition, location)"
              value={formData.details}
              onChange={e => setFormData({ ...formData, details: e.target.value })}
              rows={6}
              className="w-full"
              required
            />
          </div>

          <div>
            <select
              value={formData.timeline}
              onChange={e => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full"
              required
            >
              <option value="">When do you need it sold?</option>
              <option value="urgent">Urgent (ASAP)</option>
              <option value="3months">1-3 months</option>
              <option value="flexible">Flexible</option>
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

          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              className="min-w-[200px]"
            >
              Submit
              <span className="ml-2 text-xl">→</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 