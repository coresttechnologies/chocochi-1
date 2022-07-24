import React from 'react'
import Card from './Card'
import './Gallery.scss'

const Gallery = () => {
    return (
        <div className='GallerySection-wraper'>
            <h1>CUSTOMIZED HAMPERS</h1>
        <div className='GallerySection'>
            <Card src={"Productimg/1.jpg"} />
            <Card src={"Productimg/2.jpg"} />
            <Card src={"Productimg/4.jpg"} />
            <Card src={"Productimg/5.jpg"} />
        </div>
        </div>
    )
}

export default Gallery