import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {UserPage} from "./Components/UserPage/UserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:userId" element={<UserPage myLogin='miha'/>}/>
      </Routes>
    </div>
  );
}

export default App;
