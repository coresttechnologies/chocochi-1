import React from 'react'
import Img from '../../Images/highlight.webp'

const HighLight = () => {
    return (
        <div className="highlight">
            <div className="highlight-container">
                <div>
                    <h1>highlights</h1>
                    <p>
                        We Craft our unique chocolates with authentic Belgian based Chocolate raw materials ,
                        Uniqueness in combos of raw chocolates fusion with hot beverages like special African coffee all the way from Kilimanjaro,Tanzania & tea varieties,
                        Exclusiveness in assorted varieties of premium chocolates ,
                        Location near to sweet tempting Grill theme food street , and 
                        Elegant Packaging that reflects our Pure artistry.
                    </p>
                </div>
                <div className='image-contianer-highlight'>
                    <img src={"Productimg/17.jpg"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HighLight
