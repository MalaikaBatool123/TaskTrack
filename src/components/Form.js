import React from "react";
import { useState } from "react";
import "../styles/Form.css";
import { add_items } from "../redux/appRedux/app.actions";
import {useDispatch} from "react-redux"
const Form = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSave = () => {
    const newItem = {
      title: title,
      description: description,
      status: "pending",
      date: date,
    };
dispatch(add_items(newItem))
    
    setTitle("");
    setDescription("");
    setDate("");
  };
  return (
    <>
    <h1>{props.text}</h1>
      <div className="form-container">
        <h4 className="form-heading">Add Todo Item</h4>

        <div style={{display:"flex", justifyContent:"space-between"}}>
        <input
          type="text"
          id="form-title"
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
        />
        <input
          type="date"
          id="form-date"
          value={date}
          onChange={handleDateChange}
        />
        </div>
        <textarea
          id="form-desc"
          rows={4}
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="saveBtn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Form;
