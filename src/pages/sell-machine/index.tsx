import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../../components/layout/Layout'
import { HeroSection } from '../../components/sections/HeroSection'
import { CTAButtons } from '../../components/sections/CTAButtons'
import { FeaturesSection } from '../../components/sections/FeaturesSection'
import { PreviewSection } from '../../components/sections/PreviewSection'

const SellMachine: NextPage = () => {
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

export default SellMachine 