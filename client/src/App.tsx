import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {UserPage} from "./Components/UserPage/UserPage";
import {Navbar} from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import {FeedPage} from "./Components/FeedPage/FeedPage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
            <Route path="/user/:userId" element={<UserPage myLogin='grifon'/>}/>
            <Route path="/feed" element={<FeedPage myLogin='grifon'/>}/>
      </Routes>
    </div>
  );
}

export default App;
