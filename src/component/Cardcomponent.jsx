import React from 'react'

import img1 from '../component/image/ahm.png'
import img2 from '../component/image/army.jpg'
import img3 from '../component/image/ahm.png'
import './card.css' 
import Card from './Card'

function Cardcomponent() {
  return (
    <>   
    <h1 className='heading'>Card Gwallery</h1>
    <div className='cardComp'>
        <Card title="1" img={img1}/>
        <Card title="2" img={img2}/>
        <Card title="3" img={img3}/>
        <Card title="4" img={img2}/>
        <Card title="5" img={img2}/>
        <Card title="6" img={img2}/>
    </div>

</>
  )
}

export default Cardcomponent