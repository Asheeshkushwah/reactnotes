import React from 'react'

function UpdateVariable() {
    let data ="ram"

    const updateData=(a)=>{
        let data ="raj"
        //alert(data)
    }
    console.log("render component")
  return (
    <>
    <h1>Update Variable {data}</h1>
    <button onClick={updateData}>update data</button>
    </>
  )
}

export default UpdateVariable