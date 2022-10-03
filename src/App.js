import React from "react";
import { useContext } from "react";
import "./App.css";
import Main from "./Pages/Main";
import { Switch, Route } from "react-router-dom";
import RegPage from "./Pages/RegPage";
import Navbar from "./Components/Navbar";
import { DataContext } from "./Components/Context";

function App() {
  const context = useContext(DataContext);

  const { timer, start, count } = context;

  return (
    <>
      <Navbar start={start} timer={timer} count={count}></Navbar>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/RegPage" component={RegPage}></Route>
      </Switch>
    </>
  );
}

export default App;
