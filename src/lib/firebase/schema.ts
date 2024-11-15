import { collection } from 'firebase/firestore'
import { db } from './config'

// Collection references
export const listingsCollection = collection(db, 'listings')
export const inquiriesCollection = collection(db, 'inquiries')

// Collection types
export interface Listing {
  id?: string
  year: string
  make: string
  model: string
  email: string
  createdAt: Date
  status: 'active' | 'sold' | 'expired'
}

export interface Inquiry {
  id?: string
  query: string
  timeline: string
  details: string
  email: string
  createdAt: Date
  status: 'new' | 'contacted' | 'closed'
} 