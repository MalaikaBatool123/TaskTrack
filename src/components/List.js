import React from 'react';
import ListItem from "./ListItem";
import { useSelector } from 'react-redux';
import { APP_KEY } from '../redux/appRedux/app.reducer';

const List = (props) => {
  const viewItems = useSelector((state) => {
    return state[APP_KEY];
  });

  return (
    <div>
      {/* <p style={{marginLeft:"20px"}}>
      {viewItems.items.filter(item => item.status === props.type).length === 0 ? "No Tasks To Show" : ""}</p> */}
     <p style={{ marginLeft: "20px" }}>
  {(props.type || props.date) &&
    ((props.date && viewItems.items.filter(item => item.date === props.date && item.status === props.type).length === 0) ||
    (!props.date && viewItems.items.filter(item => item.status === props.type).length === 0))
    ? "No Tasks To Show" : ""}
</p>


      {viewItems.items.map((item, index) => {
        if ((!props.date || item.date === props.date) && (!props.type || item.status === props.type)) {
          return (
            <ListItem
              key={index}
              itemIndex={index}
              title={item.title}
              desc={item.description}
              date={item.date}
              // endDate={props.type === "completed" ? item.endDate : null} // Pass date only when type is "completed"
              status={item.status}
            />
          );
        }
        return null; 
        })}


    </div>
  );
}

export default List;
