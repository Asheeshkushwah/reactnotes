import React, { useState } from 'react'

function Hideshowandtoggle() {
    const [status ,SetStatus]=useState(true)
  return (
    <>
    <h1> Hide ,Show and toggle in element ya tag</h1>
    <center>
        {
         status ? <h1>hello world</h1>:null   
        }
        <button onClick={()=>SetStatus(false)}>Hide</button>
        <br />
        <br />
        <button onClick={()=>SetStatus(true)}>Show</button>
        <br />
        <br />
        <button onClick={()=>SetStatus(!status)}>Toggle</button>

    </center>
    </>
  )
}

export default Hideshowandtoggle