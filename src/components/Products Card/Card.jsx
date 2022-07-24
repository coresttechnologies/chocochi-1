import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ img, item }) => {
  return (
    <div className={item.length > 25 ? " show products-card" : "products-card"}>
      <LazyLoadImage src={img} alt="" effect="blur" />
      <div className="name">
        <p>{item.length > 20 ? item.slice(0, 20) + "..." : item}</p>
      </div>
      {
        item.length > 25 &&
        <div className="hoverName">
          <p>{item}</p>
        </div>
      }
    </div>
  )
}

export default Card