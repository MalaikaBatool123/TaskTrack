import React, { useState } from "react";
import Form from "./Form";

import "../styles/Home.css";
import ListShow from "./ListShow";
import Pic from "./Pic";
const Home = () => {
  
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <h1>Home</h1>
      <button className="add-task" onClick={toggleFormVisibility}>
        {isFormVisible ? (
          <>
            <i className="fa-solid fa-xmark"></i>
            <span>Hide</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-plus "></i>
            <span>Add Task</span>
          </>
        )}
      </button>
      <br />
      <div className="form-container-content">
        {/* {isFormVisible && <Form/>} */}
        {isFormVisible ? (
          <>
          <Form />
          </>
        ) : (
          <>
            <Pic src="img/cartoon.png" />
          </>
        )}
      </div>
      <br />
      {/* <h3>Tasks to do</h3> */}
      <div className="items-show-container">
        <ListShow />
        {/* <List /> */}
      </div>
    </>
  );
};

export default Home;
