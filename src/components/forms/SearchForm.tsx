import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { createInquiry } from '../../lib/firebase/services'
import type { SearchFormData } from '../../lib/types'

export function SearchForm() {
  const [formData, setFormData] = useState<SearchFormData>({
    query: '',
    timeline: '',
    details: '',
    email: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await createInquiry(formData)
    if (result.success) {
      alert('Search inquiry submitted successfully!')
      setFormData({ query: '', timeline: '', details: '', email: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Year, Make, Model"
          value={formData.query}
          onChange={e => setFormData({ ...formData, query: e.target.value })}
          className="w-full p-3 border rounded-lg"
          required
        />
        <select 
          value={formData.timeline}
          onChange={e => setFormData({ ...formData, timeline: e.target.value })}
          className="w-full p-3 border rounded-lg"
          required
        >
          <option value="">Timeline</option>
          <option value="1">Less than 1 month</option>
          <option value="2">1-2 Months</option>
          <option value="3">Greater than 2 months</option>
        </select>
        <textarea
          placeholder="Additional details (budget, specs, etc.)"
          value={formData.details}
          onChange={e => setFormData({ ...formData, details: e.target.value })}
          className="w-full p-3 border rounded-lg"
          rows={4}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 border rounded-lg"
          required
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Search Now
      </Button>
    </form>
  )
} 