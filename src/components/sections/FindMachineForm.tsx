import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../lib/firebase/config'
import { sendToSheets } from '../../lib/services/sheets'
import { Toast } from '../ui/Toast'

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
  const [isFocused, setIsFocused] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')
  const [isSubmitted, setIsSubmitted] = useState(false)

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

      await sendToSheets(formData, 'buyer')
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setToastMessage('There was an error submitting your request. Please try again.')
      setToastType('error')
      setShowToast(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
        <div className="max-w-lg w-full">
          <div className="p-8 rounded-xl bg-gray-800/90 border-2 border-green-500/20 backdrop-blur-sm text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold gradient-text">Finding Your Machine!</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Our matching system is analyzing your requirements to connect the best possible matches. You will be contacted at the email provided.
            </p>
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  document.body.classList.add('fade-out');
                  setTimeout(() => {
                    window.location.href = '/';
                  }, 500);
                }}
                className="bg-green-500/90 hover:bg-green-500"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative py-4">
      {showToast && (
        <Toast 
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold gradient-text">Find Your Machine</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            {isFocused && (
              <div className="w-36 sm:w-48 shrink-0 text-sm text-gray-400">
                <p className="font-medium text-sky-400 mb-1 sm:mb-2">
                  Try to include:
                </p>
                <div className="space-y-1 sm:space-y-2">
                  <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-800/50 rounded border border-gray-700/50">Budget range</div>
                  <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-800/50 rounded border border-gray-700/50">Required specs</div>
                  <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-800/50 rounded border border-gray-700/50">Preferred brands</div>
                  <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-800/50 rounded border border-gray-700/50">Age range</div>
                </div>
              </div>
            )}
            <textarea
              placeholder="Tell us what you're looking for..."
              value={formData.additionalDetails}
              onChange={e => setFormData({ ...formData, additionalDetails: e.target.value })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={6}
              className="flex-1"
              required
            />
          </div>

          <div>
            <select
              value={formData.timeline}
              onChange={e => setFormData({ ...formData, timeline: e.target.value })}
              className={`w-full ${!formData.timeline ? 'text-gray-500' : 'text-gray-200'}`}
              required
            >
              <option value="" className="text-gray-500">When do you need it?</option>
              <option value="urgent" className="text-gray-200">Urgent (ASAP)</option>
              <option value="3months" className="text-gray-200">1-3 months</option>
              <option value="flexible" className="text-gray-200">Flexible</option>
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

          <div className="flex justify-center pt-4 pb-8">
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