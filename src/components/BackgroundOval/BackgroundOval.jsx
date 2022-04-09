import React from 'react'
import './BackgroundOval.scss'

const BackgroundOval = ({top,left,right,bottom,transY,transX}) => {
const style = {
    top : top && top ,
    left : left && left,
    right : right && right ,
    bottom : bottom && bottom ,
    transform:` translate(${transX},${transY})`
}
  return (
    <div style={style} className='background-oval'>
    </div>
  )
}

export default BackgroundOval