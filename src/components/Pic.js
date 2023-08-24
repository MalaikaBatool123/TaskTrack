import React from 'react'
import "../styles/Pic.css"

const Pic = (props) => {
  return (
    <>
    <img src={props.src} alt="" />
    </>
  )
}

export default Pic