import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { createListing } from '../../lib/firebase/services'
import type { ListingFormData } from '../../lib/types'

export function ListingForm() {
  const [formData, setFormData] = useState<ListingFormData>({
    year: '',
    make: '',
    model: '',
    email: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await createListing(formData)
    if (result.success) {
      alert('Listing created successfully!')
      setFormData({ year: '', make: '', model: '', email: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Year"
          value={formData.year}
          onChange={e => setFormData({ ...formData, year: e.target.value })}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Make"
          value={formData.make}
          onChange={e => setFormData({ ...formData, make: e.target.value })}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={formData.model}
          onChange={e => setFormData({ ...formData, model: e.target.value })}
          className="w-full p-3 border rounded-lg"
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
        List Now
      </Button>
    </form>
  )
} 