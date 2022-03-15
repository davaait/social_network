import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StateType} from "./redux/store";

type AppPropsType = {
    appState: StateType,
    dispatch: (action: any) => void
}

const App = ({appState, ...props}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            profilePage={appState.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogsPage={appState.dialogsPage}
                        />}/>
                        {/*<Route path='/news/*' element={<Dialogs/>}/>*/}
                        {/*<Route path='/music/*' element={<Dialogs/>}/>*/}
                        {/*<Route path='/settings/*' element={<Dialogs/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App

// 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
