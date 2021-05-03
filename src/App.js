import React from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM Naming convention
    <div className = "app">
      <div className="app__body">
        {/*Sidebar*/}
        {/*ChatRoom*/}
        <Sidebar />
        <Chat/>

      </div>
    </div>
  );
}

export default App;
