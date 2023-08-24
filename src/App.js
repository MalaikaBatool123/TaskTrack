import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"

function App() {
  

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/home" element={<Content />} />
        <Route path="/add_task" element={<Content componentName="Add_Todo" text="Add Todo Item"/>} />
        <Route path="/upcoming_tasks" element={<Content componentName="Upcoming" text1="Upcoming Tasks" type="pending"/>} />
        <Route path="/completed_tasks" element={<Content componentName="Completed" text1="Completed Tasks" type="completed"/>} />
        <Route path="/deleted_tasks" element={<Content componentName="Deleted" text1="Deleted Tasks" type="deleted"/>} />
        <Route path="/today_tasks" element={<Content componentName="Today" text1="Today Tasks" type="pending" date={formattedDate}/>} />
          
        </Routes>
      </div>
      {/* <pre>{JSON.stringify(viewItems.items)}</pre> */}
    </Router>
  );
}

export default App;
