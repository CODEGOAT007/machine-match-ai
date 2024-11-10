import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../../components/layout/Layout'
import { FindHeroSection } from '../../components/sections/FindHeroSection'
import { FindMachineForm } from '../../components/sections/FindMachineForm'

const FindMachine: NextPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="relative">
          <FindHeroSection />
          <FindMachineForm />
        </div>
      </div>
    </Layout>
  )
}

export default FindMachine 