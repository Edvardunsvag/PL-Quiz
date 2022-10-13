import React from "react";
import { useContext } from "react";
import "./App.css";
import Main from "./Components/Pages/Main";
import { Switch, Route } from "react-router-dom";
import RegPage from "./Components/Pages/RegPage";
import Navbar from "./Components/Navbar";
import { DataContext } from "./Components/Context";

function App() {
  const context = useContext(DataContext);

  const { timer, start, count, user } = context;

  return (
    <>
      <div className="fullPage">
        <Navbar start={start} timer={timer} count={count} user={user}></Navbar>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/RegPage" component={RegPage}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
