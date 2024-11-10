import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../../components/layout/Layout'
import { SellHeroSection } from '../../components/sections/SellHeroSection'
import { SellMachineForm } from '../../components/sections/SellMachineForm'

const SellMachine: NextPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="relative">
          <SellHeroSection />
          <SellMachineForm />
        </div>
      </div>
    </Layout>
  )
}

export default SellMachine 