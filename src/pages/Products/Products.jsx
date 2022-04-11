import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Products Card/Card'
import './Products.scss'
import {productsDetails} from './ProductsDetails'

const Products = () => {
  console.log(productsDetails);
  return (
    <>
      <div className='products-page'>
        <Navbar padding={"100px"} />
        {
          productsDetails.map(data=>(
            <Card img={data.img} item={data.name}/>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default Products