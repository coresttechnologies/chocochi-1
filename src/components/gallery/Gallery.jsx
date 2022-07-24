import React from 'react'
import Card from './Card'
import './Gallery.scss'

const Gallery = () => {
    return (
        <div className='GallerySection-wraper'>
            <h1>CUSTOMIZED HAMPERS</h1>
        <div className='GallerySection'>
            <Card src={"Productimg/2.jpg"} name={"Aluva"} description={"1450 sqft"} />
            <Card src={"Productimg/1.jpg"} name={"Angamaly"} description={"1750 sqft"} />
            <Card src={"Productimg/4.jpg"} name={"Trivandrum"} description={"2270 sqft"} />
            <Card src={"Productimg/5.jpg"} name={"Trivandrum"} description={"2270 sqft"} />
        </div>
        </div>
    )
}

export default Gallery