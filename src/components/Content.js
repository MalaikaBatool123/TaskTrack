import React from 'react';
import "../styles/Content.css";
import Home from './Home'; 
import Form from './Form'; 
import ListShow from './ListShow';

const Content = (props) => {
  const { componentName } = props;

  let componentToRender;
  switch (componentName) {
    case 'Home':
      componentToRender = <Home />;
      break;
    case 'Add_Todo':
      componentToRender = <Form text={props.text}/>;
      break;
    case 'Upcoming':
      componentToRender = <ListShow text1={props.text1} type={props.type}/>;
      break;
    case 'Completed':
      componentToRender = <ListShow text1={props.text1} type={props.type}/>;
      break;
    case 'Deleted':
      componentToRender = <ListShow text1={props.text1} type={props.type}/>;
      break;
    case 'Today':
      componentToRender = <ListShow text1={props.text1} type={props.type} date={props.date}/>;
      break;
    
    default:
      componentToRender = <Home/>;
  }

  return (
    <div className="content">
      {componentToRender}
    </div>
  );
}

export default Content;
