import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { HeroSection } from '../components/sections/HeroSection'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-[calc(100vh-9rem)] flex items-center pt-0">
        <div className="w-full">
          <HeroSection />
        </div>
      </div>
    </Layout>
  )
}

export default Home 