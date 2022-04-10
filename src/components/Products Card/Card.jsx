import React from 'react'
import img from '../../Images/heroImg.png'

const Card = () => {
  return (
    <div className='products-card'>
        <img src={img} alt="" />
        <div className="name">
            <p>Cappicino</p>
        </div>
    </div>
  )
}

export default Card