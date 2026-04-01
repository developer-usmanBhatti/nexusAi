"use client"

import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import FeaturedModels from "@/components/FeaturedModels"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedModels />
    </Layout>
  )
}