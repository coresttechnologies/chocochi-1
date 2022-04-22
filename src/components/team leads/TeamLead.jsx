import React from 'react'
import Muhamed_Basheer from '../../Images/owners/Muhamed Basheer Pazhayillath.jpg'
import Musthafa_Pilassery from '../../Images/owners/Musthafa Pilassery.jpg'
import Ashraf_Kammilipurayil from '../../Images/owners/Ashraf Kammilipurayil.jpg'

const TeamLead = () => {
  return (
    <div className='team-lead'>
        <h1>Our team leads</h1>
        <div className="image-container-teamlead">
            <div>
                <img src={Muhamed_Basheer} style={{objectPosition:"bottom"}} alt="" />
                <p>Muhamed Basheer</p>
            </div>
            <div>
                <img src={Ashraf_Kammilipurayil} alt="" />
                <p>Ashraf Kammilipurayil </p>
            </div>
            <div>
                <img src={Musthafa_Pilassery} alt="" />
                <p>Musthafa Pilassery </p>
            </div>
        </div>
    </div>
  )
}

export default TeamLead