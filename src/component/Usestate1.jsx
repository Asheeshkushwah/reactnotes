import React, { useState } from 'react'

function Usestate1() {
    const [data ,setData] = useState ("ram")

    const updateData =()=>{
        setData("rohit")
    }
    const UpdateVariable =(a)=>{
        setData(a)
    }
    console.log("render")
  return (
    <>
    <h1>Use state{data}</h1>
    <button onClick={updateData}>update data</button>
    <br />
    <br />
    <button onClick={()=>setData("raj")}>update data12</button>
    <br />
    <br />
    <button onClick={()=>UpdateVariable("pn")}>update data123</button>
    </>
  )
}

export default Usestate1