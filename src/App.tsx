import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    appState: StateType,
    addPost: (textFromInput: string) => void
}

const App = ({appState, addPost, ...props}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            posts={appState.profilePage.posts}
                            addPost={addPost}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogs={appState.profilePage.dialogs}
                            messages={appState.messagesPage.messages}
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
