import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Main from './components/Main'
import Content from './components/Content'
import CallToAction from './components/CallToAction'
import Google from './components/Google'
import Dowload from './components/Dowload'
import Footer from './components/Footer'
import Axios from "axios";

function Home() {
  return (
    <>
   
      <Banner />
      <Main />
      <Content />
      <CallToAction />
      <Dowload/>
      <Google/>
      <Footer />
    </>
  )
}

export default Home
