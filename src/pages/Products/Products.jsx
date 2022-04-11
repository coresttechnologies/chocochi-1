import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Products Card/Card'
import './Products.scss'

const Products = () => {
  return (
    <>
      <div className='products-page'>
        <Navbar padding={"100px"} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default Products