import React from 'react'


const Card = ({src,name,description}) => {
    return (
        <div className="card">
            <img src={src} alt="" />
        </div>
    )
}

export default Card