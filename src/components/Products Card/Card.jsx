import React from 'react'

const Card = ({img,item}) => {
  return (
    <div className={ item.length > 25 ? " show products-card" :"products-card" }>
        <img src={img} alt="" />
        <div className="name">
          <p>{item.length > 25 ? item.slice( 0,25 )+ "..." : item}</p>
        </div>
        <div className="hoverName">
          <p>{item}</p>
        </div>
    </div>
  )
}

export default Card