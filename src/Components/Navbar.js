import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";
export default function Navbar({ start, timer, count }) {
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="flex container md:rounded-md justify-center text-base h-20 bg-Purple">
        <div
          className={`flex ${
            start ? "justify-evenly" : "justify-between"
          } h-20 w-full px-5 py-0 max-w-5xl`}>
          {!start ? (
            <>
              <div className="flex md:order-1 justify-self-center text-xl md:text-2xl items-center font-bold ml-6 text-white">
                {start ? <h2>{timer}</h2> : "Premier League Quiz"}
              </div>
              <div
                onClick={toggleClick}
                className="md:hidden flex justify-self-end items-center cursor-pointer text-2xl text-white mr-6 ">
                <FaBars></FaBars>
              </div>
              <div className="hidden md:flex text-xl order-0 items-center text-white">
                <Link className="hover:no-underline hover:text-Green" to="/">
                  Home
                </Link>
              </div>
              <div className="hidden md:flex order-2 text-xl items-center text-white">
                <Link
                  className="hover:no-underline hover:text-Green"
                  to="/regPage">
                  Leaderboard
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex md:order-1 justify-self-center text-4xl md:text-4xl items-center font-bold text-white">
                {<h2>{timer}</h2>}
              </div>
              <div className="flex md:order-1 justify-self-center text-4xl md:text-4xl items-center font-bold text-Green">
                {<h2>{count}</h2>}
              </div>
            </>
          )}
        </div>
      </nav>
      {<Sidebar isOpen={toggle} toggle={toggleClick}></Sidebar>}
    </>
  );
}
