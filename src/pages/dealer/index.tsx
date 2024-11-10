import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../../components/layout/Layout'
import { DealerApplicationForm } from '../../components/sections/DealerApplicationForm'

const DealerApplication: NextPage = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="hero-gradient" />
        <div className="pt-8 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Join Our Premium
              <br />
              <span className="gradient-text">Dealer Network</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get exclusive access to AI-powered matching, nationwide inspection coverage, 
              and qualified buyer inquiries.
            </p>
          </div>
          <DealerApplicationForm />
        </div>
      </div>
    </Layout>
  )
}

export default DealerApplication 