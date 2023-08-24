import React from 'react'
import "../styles/ListItem.css"
import { update_status } from '../redux/appRedux/app.actions'
import { useDispatch } from 'react-redux'
const ListItem = (props) => {
    const dispatch = useDispatch()
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const handleMarkCompleted = (index) => {


        dispatch(update_status(index, "completed", formattedDate))

    }
    const handleMarkDeleted = (index) => {

        dispatch(update_status(index, "deleted"))

    }
    return (
        <>

            <div className="list-item">
                

                {props.status !== "deleted" && (
                        <button onClick={() => handleMarkDeleted(props.itemIndex)} className="trash-btn"><i className="fa-solid fa-trash"></i> </button>
                    )}
                <div className="top">
                    <p className="list-item-title">{props.title} - <span style={{ fontSize: "16px" }}>{props.status}</span></p>
                    <p className="list-item-date"><small>Date: {props.date}</small></p>

                </div>
                <p className='list-item-desc'>{props.desc}</p>
                <div className='mark-completed-container'>


                    {(props.status === "pending" ) && (
                        <button onClick={() => handleMarkCompleted(props.itemIndex)} className='mark-completed'>
                            <i className="fa-solid fa-check"></i> &nbsp; Mark as Completed
                        </button>
                    )}

                </div>
            </div>


        </>
    )
}

export default ListItem