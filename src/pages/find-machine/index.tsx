import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../../components/layout/Layout'
import { FindHeroSection } from '../../components/sections/FindHeroSection'
import { FindMachineForm } from '../../components/sections/FindMachineForm'
import { FeaturesSection } from '../../components/sections/FeaturesSection'
import { PreviewSection } from '../../components/sections/PreviewSection'

const FindMachine: NextPage = () => {
  return (
    <Layout>
      <div className="space-y-24">
        <div className="relative">
          <FindHeroSection />
          <FindMachineForm />
        </div>
        <PreviewSection />
        <FeaturesSection />
      </div>
    </Layout>
  )
}

export default FindMachine 