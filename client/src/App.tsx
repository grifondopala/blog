import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {UserPage} from "./Components/UserPage/UserPage";
import {Navbar} from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import {FeedPage} from "./Components/FeedPage/FeedPage";
import {AuthPage} from "./Components/AuthPage/AuthPage";
import * as Cookie from './Cookie/cookie'
import {getCookie} from "./Cookie/cookie";

function App() {

  const [myData, setMyData] = React.useState({myId: Number(getCookie('myId')), myAvatarSrc: getCookie('myAvatarSrc')})

  console.log(process.env["REACT_APP_SERVER"])

  return (
    <div>
      <Navbar myId={myData.myId} myAvatarSrc={myData.myAvatarSrc}/>
      <Routes>
            <Route path="/user/:userId" element={<UserPage myId={myData.myId} myAvatarSrc={myData.myAvatarSrc}/>}/>
            <Route path="/feed" element={<FeedPage myLogin='grifon'/>}/>
            <Route path="/auth" element={<AuthPage/>} />
      </Routes>
    </div>
  );
}

export default App;
