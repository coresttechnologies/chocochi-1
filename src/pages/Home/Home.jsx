import React, { Suspense, useState } from 'react'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import FuturePlans from '../../components/future plans/FuturePlans'
import Hero from '../../components/Hero/Hero'
import HighLight from '../../components/highlight/HighLight'
import Loading from '../../components/Loading/Loading'
import TeamLead from '../../components/team leads/TeamLead'
import WhatWeOffer from '../../components/whatweoffer/WhatWeOffer'
import './Home.scss'
// import Gallery from '../../components/gallery/Gallery'

const Gallery = React.lazy(() => import('../../components/gallery/Gallery'))

const Home = () => {
  const [value, setValue] = useState()
  const letsStartBUttonHandler = () => {
    window.scrollTo(0, value.getBoundingClientRect().top - 50)
  }
  return (
    <div className='home-page'>
      <Hero buttonHandler={letsStartBUttonHandler} />
      <About setValue={setValue} />
      <TeamLead />
      <Suspense fallback={<Loading/>}>
        <Gallery/>
      </Suspense>
      <WhatWeOffer />
      <FuturePlans />
      <HighLight />
      <Footer />
    </div>
  )
}

export default Home