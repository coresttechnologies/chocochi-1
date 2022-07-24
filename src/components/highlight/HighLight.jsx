import React from 'react'
import Img from '../../Images/highlight.webp'

const HighLight = () => {
    return (
        <div className="highlight">
            <div className="highlight-container">
                <div>
                    <h1>Future plans</h1>
                    <p>We are planning to scale up our operations as:</p>
                    <li>Exclusive Café CHOCOCHI outlets</li>
                    <li>Chocochi Chocolate Kiosk with assorted varieties of unique premium chocolates</li>
                </div>
                <div className='image-contianer-highlight'>
                    <img src={"Productimg/17.jpg"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HighLight
