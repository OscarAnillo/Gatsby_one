import React from "react"
import Layout from "../Components/layout"
import Hero from '../Components/hero'
import Places from "../Components/places"
import About from './about';

export default function Home() {
  return (
      <div>
        <Layout>
          <Hero />
          <Places />
          <About />
        </Layout>
      </div>
  )
}
