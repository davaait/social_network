import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Users} from "./components/Users/Users";
import {Dialogs} from "./components/Dialogs/Dialogs";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile/>}/>
            <Route path='/dialogs/*' element={<Dialogs/>}/>
            <Route path='/users/*' element={<Users/>}/>
            {/*<Route path='/news/*' element={<Dialogs/>}/>*/}
            {/*<Route path='/music/*' element={<Dialogs/>}/>*/}
            {/*<Route path='/settings/*' element={<Dialogs/>}/>*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
