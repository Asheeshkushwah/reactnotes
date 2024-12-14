import React, { useState } from 'react'
import UpdateVariable from './component/UpdateVariable'
import Usestate from './component/Usestate'
import Usestate1 from './component/Usestate1'
import Hideshowandtoggle from './component/Hideshowandtoggle'
import Props from './component/Props'
import Props1 from './component/Props1'
import Cardcomponent from './component/Cardcomponent'

function App() {
  let data = "ravi"
  const [Count,setCount]=useState(0)

  return (
    <>
    {/* // <UpdateVariable/>
    // <Usestate/> */}
    {/* <Usestate1/> */}
    {/* <Hideshowandtoggle/> */}
    <Cardcomponent/>
    {/* <Props d={data}/> */}
    {/* <Props1 d={data} c={Count}/>
    <button onClick={()=>setCount(Count+1)}>update count</button> */}
    </>
  )
}

export default App
