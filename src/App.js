import React from 'react';
import './App.css';
import Main from './Pages/Main';
import { Switch, Route } from 'react-router-dom';
import RegPage from './Pages/RegPage';
import Navbar from './Components/Navbar';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route exact path='/RegPage' component={RegPage}></Route>
            </Switch>
        </>
    );
}

export default App;
