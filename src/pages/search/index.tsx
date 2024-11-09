import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { SearchForm } from '../../components/forms/SearchForm'

export default function Search() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Find a Used Machine</h1>
        <SearchForm />
      </div>
    </Layout>
  )
}
