import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { HeroSection } from '../components/sections/HeroSection'
import { CTAButtons } from '../components/sections/CTAButtons'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { PreviewSection } from '../components/sections/PreviewSection'
import { useEffect } from 'react'
import { testFirebaseConnection } from '../lib/firebase/config'

const Home: NextPage = () => {
  useEffect(() => {
    const testConnection = async () => {
      const result = await testFirebaseConnection()
      console.log('Firebase connection test:', result)
    }
    
    testConnection()
  }, [])

  return (
    <Layout>
      <div className="space-y-24">
        <div className="relative">
          <HeroSection />
          <CTAButtons />
        </div>
        <PreviewSection />
        <FeaturesSection />
      </div>
    </Layout>
  )
}

export default Home 