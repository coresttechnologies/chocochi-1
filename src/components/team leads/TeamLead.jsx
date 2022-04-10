import React from 'react'
import img1 from '../../Images/aboutImg.png'

const TeamLead = () => {
  return (
    <div className='team-lead'>
        <h1>Our team leads</h1>
        <div className="image-container-teamlead">
            <div>
                <img src={img1} alt="" />
                <p>Muhamed Basheer</p>
            </div>
            <div>
                <img src={img1} alt="" />
                <p>Ashraf Kammili </p>
            </div>
            <div>
                <img src={img1} alt="" />
                <p>Musthafa Pilassery </p>
            </div>
        </div>
    </div>
  )
}

export default TeamLead