import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
const myStyle = {
  color: "403F48",
  backgroundColor: "#95A792",
};
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div
        style={myStyle}
        className="container flex-row justify-space-between-lg justify-center align-center"
      >
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Through the Woods</h1>
          </Link>
          <p className="m-0">A path forward to a healthier you</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
//Alix's notes
//styling
//links
//buttons?
//photo?
