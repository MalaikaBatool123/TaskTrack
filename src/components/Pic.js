import React from 'react'
import "../styles/Pic.css"
import cartoon from "./img/cartoon.png"

const Pic = (props) => {
  
  return (
    <>
    <img src={cartoon} alt="" />
    {/* <img src={props.src} alt="" /> */}
    </>
  )
}

export default Pic