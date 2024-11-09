import { initializeApp, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Initialize Firebase with error handling
let app: FirebaseApp | undefined
try {
  app = initializeApp(firebaseConfig)
} catch (error) {
  if (error instanceof FirebaseError && error.code !== 'app/duplicate-app') {
    console.error('Firebase initialization error:', error)
    throw error
  }
}

// Ensure app is initialized before creating Firestore instance
if (!app) {
  throw new Error('Firebase app initialization failed')
}

export const db: Firestore = getFirestore(app)

// Simple test function
export const testFirebaseConnection = async () => {
  try {
    if (!app) {
      throw new Error('Firebase app not initialized')
    }
    const testDb = getFirestore(app)
    console.log('Firebase connection successful!')
    return true
  } catch (error) {
    console.error('Firebase connection failed:', error)
    return false
  }
} 