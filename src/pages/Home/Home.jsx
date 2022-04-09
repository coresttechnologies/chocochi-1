import React from 'react'
import About from '../../components/about/About'
import BackgroundOval from '../../components/BackgroundOval/BackgroundOval'
import FuturePlans from '../../components/future plans/FuturePlans'
import Hero from '../../components/Hero/Hero'
import HighLight from '../../components/highlight/HighLight'
import TeamLead from '../../components/team leads/TeamLead'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-page'>
      <Hero/>
      <About/>
      <TeamLead/>
      <FuturePlans/>
      <HighLight/>
    </div>
  )
}

export default Home