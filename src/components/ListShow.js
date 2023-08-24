import React from 'react'
import "../styles/ListShow.css"
import List from './List'

const ListShow = (props) => {
  return (
    <>
    
    <div className="list-show">
        <h1>{props.text1}</h1>
        <List type={props.type} date={props.date} />

    </div>
    </>
  )
}

export default ListShow