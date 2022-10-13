import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";

import Sidebar from "./Sidebar/Sidebar";
import { useContext } from "react";
import { DataContext } from "./Context";
export default function Navbar({ start, timer, count, user }) {
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle(!toggle);
  };

  const context = useContext(DataContext);

  const { setUser, setLoggedIn, loggedIn, setNameChange, newGameWithoutStart } =
    context;

  const clientId =
    "621615004829-bv8phnthtr9psu419640ujvtec2tc2md.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    var userObject = res.profileObj;
    setUser(userObject);
    setNameChange(userObject.name);
    setLoggedIn(true);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const logout = () => {
    setUser("");
    setLoggedIn(false);
    newGameWithoutStart();
  };

  return (
    <>
      <nav className="container relative flex justify-center md:rounded-md text-base h-20 bg-Purple">
        <div
          className={`flex ${
            start ? "justify-evenly" : "justify-between"
          } h-20 w-full px-5 py-0 max-w-5xl`}>
          {!start ? (
            <>
              <div className="flex md:order-1 text-xl md:text-2xl items-center font-bold ml-6 text-white">
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
        {!loggedIn ? (
          <GoogleLogin
            render={(renderProps) => (
              <div className="hidden md:flex justify-center  items-center ">
                <button
                  className="bg-Green hover:bg-green-400"
                  onClick={renderProps.onClick}
                  style={{
                    margin: "25px",

                    borderRadius: "5px",
                    padding: "10px",
                  }}>
                  Login
                </button>
              </div>
            )}
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />
        ) : (
          <GoogleLogout
            render={(renderProps) => (
              <div className="hidden md:flex justify-center items-center ">
                <button
                  className="bg-Red hover:bg-red-500 text-white"
                  onClick={renderProps.onClick}
                  style={{
                    margin: "25px",

                    borderRadius: "5px",
                    padding: "10px",
                  }}>
                  Log out
                </button>
              </div>
            )}
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={logout}
          />
        )}
      </nav>
      {
        <Sidebar
          isOpen={toggle}
          logout={logout}
          toggle={toggleClick}
          loggedIn={loggedIn}
          onSuccess={onSuccess}
          onFailure={onFailure}
          clientId={clientId}></Sidebar>
      }
    </>
  );
}
