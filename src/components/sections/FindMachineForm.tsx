import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../lib/firebase/config'

const BLOCKED_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'zoho.com',
  'protonmail.com',
  'tutanota.com',
  'mail.com',
  'proton.me',
  'mailchimp.com',
  'sendgrid.com',
  'getresponse.com',
  'constantcontact.com',
  'aweber.com',
  'activehosted.com',
  'campaignmonitor.com',
  'benchmarkemail.com',
  'guerrillamail.com',
  '10minutemail.com',
  'mailinator.com',
  'temp-mail.org',
  'trashmail.com',
  'disposablemail.com',
  'throwawaymail.com',
  'mytrashmail.com',
  'getnada.com',
  'tempmailaddress.com',
  'facebook.com',
  'twitter.com',
  'instagram.com',
  'linkedin.com',
  'pinterest.com',
  'snapchat.com',
  'whatsapp.com',
  'tiktok.com',
  'wordpress.com',
  'weebly.com',
  'wix.com',
  'squarespace.com',
  'blogspot.com',
  'strikingly.com',
  'medium.com',
  'torproject.org',
  'ivpn.net',
  'expressvpn.com',
  'cyberghostvpn.com',
  'bit.ly',
  'shorturl.at',
  'tinyurl.com',
  'is.gd',
  'adf.ly',
  'goo.gl',
  'ow.ly',
  'dropbox.com',
  'google.com',
  'onedrive.com',
  'box.com',
  'mediafire.com',
  'wetransfer.com',
  'pcloud.com',
  'sendspace.com',
  'bet365.com',
  '888casino.com',
  'pokerstars.com',
  'bovada.com',
  'fanduel.com',
  'draftkings.com',
  'chaturbate.com',
  'pornhub.com',
  'onlyfans.com',
  'paypal-support.com',
  'microsoft-support.com',
  'apple-support.com',
  'google-support.com',
  'amazon-service.com',
  'mybank-security.com',
  'banking-secure.com',
  '163.com',
  'qq.com',
  '126.com',
  'sina.com',
  'yeah.net',
  'mail.ru',
  'rambler.ru',
  'yandex.ru',
  'zoho.in',
  'craigslist.org',
  'reddit.com',
  'meetup.com',
  'fiverr.com',
  'taskrabbit.com',
  'airbnb.com',
  'lyft.com',
  'uber.com',
  'doordash.com',
  'grubhub.com'
]

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
  const [emailError, setEmailError] = useState('')

  const validateBusinessEmail = (email: string) => {
    const domain = email.split('@')[1]?.toLowerCase()
    if (!domain) return false
    return !BLOCKED_DOMAINS.includes(domain)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setFormData({ ...formData, email })
    
    if (email && !validateBusinessEmail(email)) {
      setEmailError('Please use your business email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateBusinessEmail(formData.email)) {
      setEmailError('Please use your business email address')
      return
    }

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        type: 'buyer',
        timestamp: new Date().toISOString(),
        status: 'new'
      })
      alert('Thank you! We will be in touch soon.')
      setFormData({ additionalDetails: '', timeline: '', email: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
    }
  }

  return (
    <div className="relative py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold gradient-text">Find Your Machine</h2>
          <p className="text-gray-400 mt-2">Tell us what you're looking for</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              placeholder="Tell us what kind of machine you're looking for... (type, specs, budget, etc.)"
              value={formData.additionalDetails}
              onChange={e => setFormData({ ...formData, additionalDetails: e.target.value })}
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
              <option value="">When do you need it?</option>
              <option value="urgent">Urgent (ASAP)</option>
              <option value="3months">1-3 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <input
              type="email"
              placeholder="Your business email address"
              value={formData.email}
              onChange={handleEmailChange}
              className={`w-full ${emailError ? 'border-red-500/50' : ''}`}
              required
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-400">{emailError}</p>
            )}
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