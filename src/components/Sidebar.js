import React from 'react'
import "../styles/Sidebar.css"
import {
  Link
} from "react-router-dom";
const Sidebar = () => {
  return (
    <>

    <div className="sidebar">
      <Link to="/home" className="sidebar-logo">
        
    <img src="img/todo.png" alt="lgo" /> 
      <h2><span style={{color:"#a4557f"}}>Task</span><span >Track</span></h2>
      </Link>
      <Link to="/home" className="sidebar-btn">
        <i className="fa-solid fa-house"></i><span>Home</span>
      </Link>
      
      <Link to="/add_task" className="sidebar-btn"><i className="fa-solid fa-plus"></i> <span> Add Todo</span></Link>
      <Link to="/upcoming_tasks" className="sidebar-btn"><i className="fa-solid fa-calendar-days"></i> <span>Upcoming</span></Link>
      <Link to="/completed_tasks" className="sidebar-btn"><i className="fa-solid fa-check"></i> <span>Completed</span></Link>
      <Link to="/deleted_tasks" className="sidebar-btn"><i className="fa-solid fa-trash"></i> <span>Trash</span></Link>
      <Link to="/today_tasks" className="sidebar-btn"><i className="fa-solid fa-calendar-week"></i> <span>Today</span></Link>

      
    </div>
    
    
    </>
  )
}

export default Sidebar