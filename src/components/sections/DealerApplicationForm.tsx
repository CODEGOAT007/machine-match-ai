import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../lib/firebase/config'
import { sendToSheets } from '../../lib/services/sheets'

interface DealerApplicationData {
  companyName: string
  website: string
  yearsFounded: string
  monthlyVolume: string
  businessType: string
  contactName: string
  email: string
  phone: string
  message: string
}

export function DealerApplicationForm() {
  const [formData, setFormData] = useState<DealerApplicationData>({
    companyName: '',
    website: '',
    yearsFounded: '',
    monthlyVolume: '',
    businessType: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Send to Firestore
      await addDoc(collection(db, 'dealer_applications'), {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'pending'
      })

      // Send to Google Sheets
      await sendToSheets(formData, 'dealer')

      alert('Application submitted successfully. Our team will contact you shortly.')
      setFormData({
        companyName: '',
        website: '',
        yearsFounded: '',
        monthlyVolume: '',
        businessType: '',
        contactName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('There was an error submitting your application. Please try again.')
    }
  }

  return (
    <div className="relative py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold gradient-text">Dealer Application</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Join our exclusive network of premium machinery dealers. 
            Access AI-powered matching and our nationwide inspection network.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={e => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full"
              required
            />
            <input
              type="text"
              placeholder="Company Website"
              value={formData.website}
              onChange={e => setFormData({ ...formData, website: e.target.value })}
              className="w-full"
              required
            />
            <input
              type="text"
              placeholder="Year Founded"
              value={formData.yearsFounded}
              onChange={e => setFormData({ ...formData, yearsFounded: e.target.value })}
              className="w-full"
              required
            />
            <select
              value={formData.monthlyVolume}
              onChange={e => setFormData({ ...formData, monthlyVolume: e.target.value })}
              className="w-full"
              required
            >
              <option value="">Monthly Transaction Volume</option>
              <option value="1-5">1-5 machines</option>
              <option value="6-20">6-20 machines</option>
              <option value="21-50">21-50 machines</option>
              <option value="50+">50+ machines</option>
            </select>
          </div>

          <select
            value={formData.businessType}
            onChange={e => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full"
            required
          >
            <option value="">Business Type</option>
            <option value="dealer">Machinery Dealer</option>
            <option value="broker">Machinery Broker</option>
            <option value="auctioneer">Auctioneer</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="other">Other</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Contact Name"
              value={formData.contactName}
              onChange={e => setFormData({ ...formData, contactName: e.target.value })}
              className="w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full"
            required
          />

          <textarea
            placeholder="Tell us about your business and why you'd like to join our network..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full"
            required
          />

          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              className="min-w-[200px]"
            >
              Submit Application
              <span className="ml-2 text-xl">→</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 