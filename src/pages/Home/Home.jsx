import React, { useState } from 'react'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import FuturePlans from '../../components/future plans/FuturePlans'
import Hero from '../../components/Hero/Hero'
import HighLight from '../../components/highlight/HighLight'
import TeamLead from '../../components/team leads/TeamLead'
import './Home.scss'

const Home = () => {
  const [value, setValue] = useState()
  const letsStartBUttonHandler = () => {
    window.scrollTo(0,value.getBoundingClientRect().top- 50 )
  }
  return (
    <div className='home-page'>
      <Hero buttonHandler={letsStartBUttonHandler}/>
      <About setValue={setValue}/>
      <TeamLead/>
      <FuturePlans/>
      <HighLight/>
      <Footer/>
    </div>
  )
}

export default Home