import React from "react";
import { FaTimes } from "react-icons/fa";
import { SidebarContainer } from "./SidebarElements";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

const Sidebar = ({
  isOpen,
  toggle,
  loggedIn,
  clientId,
  onSuccess,
  onFailure,
  logout,
}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <div className="icon">
        <FaTimes onClick={toggle}></FaTimes>
      </div>
      <div className="sidebarmenu">
        <Link to="/" className="sidebarlink">
          Home
        </Link>
        <Link to="/regPage" className="sidebarlink">
          Leaderboard
        </Link>
        {!loggedIn ? (
          <GoogleLogin
            render={(renderProps) => (
              <div className="sidebarlink">
                <button
                  className="bg-Green sidebarlink"
                  onClick={renderProps.onClick}
                  style={{
                    margin: "25px",
                    borderRadius: "25px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
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
              <div className=" sidebarlink">
                <button
                  className="bg-Red sidebarLink"
                  onClick={renderProps.onClick}
                  style={{
                    margin: "25px",
                    borderRadius: "25px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
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
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
