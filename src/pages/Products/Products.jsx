import React, { lazy, Suspense } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Products.scss'
import {productsDetails} from './ProductsDetails';
const Card = lazy(()=>import ('../../components/Products Card/Card'));

const Products = () => {
  console.log(productsDetails);
  return (
    <>
    <Suspense fallback={<h5>Loading...</h5>}>
      <div className='products-page'>
        <Navbar padding={"100px"} />
        {
          productsDetails.map(data=>(
            <Card img={data.img} item={data.name}/>
          ))
        }
      </div>
      <Footer />
      </Suspense>
    </>
  )
}

export default Products