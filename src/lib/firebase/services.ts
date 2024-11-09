import { addDoc, serverTimestamp, collection, getDocs, writeBatch } from 'firebase/firestore'
import { db } from './config'
import { listingsCollection, inquiriesCollection } from './schema'
import type { ListingFormData, SearchFormData } from '../types'

export const createListing = async (data: ListingFormData) => {
  try {
    const listing = {
      ...data,
      createdAt: serverTimestamp(),
      status: 'active'
    }
    const docRef = await addDoc(listingsCollection, listing)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating listing:', error)
    return { success: false, error }
  }
}

export const createInquiry = async (data: SearchFormData) => {
  try {
    const inquiry = {
      ...data,
      createdAt: serverTimestamp(),
      status: 'new'
    }
    const docRef = await addDoc(inquiriesCollection, inquiry)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return { success: false, error }
  }
}

export const testFirestoreConnection = async () => {
  try {
    // Try to write a test document
    const testDoc = await addDoc(collection(db, '_test_connection'), {
      timestamp: serverTimestamp(),
      test: true
    })
    
    console.log('Test document written with ID:', testDoc.id)
    return { success: true, id: testDoc.id }
  } catch (error) {
    console.error('Connection test failed:', error)
    return { success: false, error }
  }
}

export const cleanupTestDocs = async () => {
  try {
    const testRef = collection(db, '_test_connection')
    const snapshot = await getDocs(testRef)
    
    const batch = writeBatch(db)
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref)
    })
    
    await batch.commit()
    console.log('Test documents cleaned up')
  } catch (error) {
    console.error('Cleanup failed:', error)
  }
} 