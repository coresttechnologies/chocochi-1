import React from 'react'
import Img from '../../Images/highlight.webp'

const HighLight = () => {
    return (
        <div className="highlight">
            <div className="highlight-container">
                <div>
                    <h1>highlights</h1>
                    <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
                        used to demonstrate the visual form of a document or a typeface without relying</p>
                </div>
                <div className='image-contianer-highlight'>
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HighLight