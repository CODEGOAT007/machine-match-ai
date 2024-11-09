import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { ListingForm } from '../../components/forms/ListingForm'

export default function List() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Sell a Used Machine</h1>
        <ListingForm />
      </div>
    </Layout>
  )
}
