import React from 'react'
import About from '../../components/about/About'
import BackgroundOval from '../../components/BackgroundOval/BackgroundOval'
import Hero from '../../components/Hero/Hero'
import TeamLead from '../../components/team leads/TeamLead'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-page'>
      <Hero/>
      <About/>
      <TeamLead/>
    </div>
  )
}

export default Home