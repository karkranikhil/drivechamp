import React from "react"
import Layout from '../components/Layout/index'
import Hero from '../components/Hero/index'
import WhoWeAre from '../components/AboutUs/index'
import WhereWeGo from "../components/WhereWeGo/index"
import Operators from '../components/Operators/index'
import Requirements from "../components/Requirements"
import Form from "../components/Form"
const Home = () => {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <WhereWeGo />
      <Operators />
      <Requirements />
      <Form />
    </Layout>
  )
}

export default Home
