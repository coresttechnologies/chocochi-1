import React from 'react'

const Card = ({img,item}) => {
  return (
    <div className='products-card'>
        <img src={img} alt="" />
        <div className="name">
            <p>{item}</p>
        </div>
    </div>
  )
}

export default Card