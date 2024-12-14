import React, { useState } from 'react'

function Usestate() {
    const [data,setData]=useState("ram")

    const updateData=()=>{
        setData("raj")
    }
    console.log("render component")
  return (
    <>
    <h1>use state {data}</h1>
    <button onClick={updateData}>click</button>
    </>
  )
}

export default Usestate