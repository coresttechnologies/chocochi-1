import React from 'react'
import About from '../../components/about/About'
import BackgroundOval from '../../components/BackgroundOval/BackgroundOval'
import Hero from '../../components/Hero/Hero'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-page'>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home