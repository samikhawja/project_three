import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import './MainNav.css';

// COMMENTED OUT until auth is set up, same line 12 & 30
// import Auth from "../../utils/auth";

const MainNav = () => {
  // COMMENTED OUT until auth is set up
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <Navbar id="header-nav" className="justify-content-between flex-wrap py-4 toggle-justify">
      <h1 className="display-3 px-4 mx-2 my-2" id="brand">Through the Woods</h1>
      <Nav className="px-3 mt-2 mx-2 fs-6" id="nav-pages">
          <Nav.Link href="/" className="mx-4 h3">
              HOME
          </Nav.Link>
          <Nav.Link href="/therapy" className="mx-4 h3">
              THERAPY SEARCH
          </Nav.Link>
          <Nav.Link href="/dashboard" className="mx-4 h3">
              DASHBOARD
          </Nav.Link>
          <Nav.Link  className="mx-4 h3">
              LOGIN
          </Nav.Link>
        </Nav>
    </Navbar>
        // {/* COMMENTED OUT until auth is set up, */}
        // {/* <div>
        //   {Auth.loggedIn() ? (
        //     <>
        //       <Link className="btn btn-lg btn-info m-2" to="/me">
        //         {Auth.getProfile().data.username}'s profile
        //       </Link>
        //       <button className="btn btn-lg btn-light m-2" onClick={logout}>
        //         Logout
        //       </button>
        //     </>
        //   ) : (
        //     <>
        //       <Link className="btn btn-lg btn-info m-2" to="/login">
        //         Login
        //       </Link>
        //       <Link className="btn btn-lg btn-light m-2" to="/signup">
        //         Signup
        //       </Link>
        //     </>
        //   )}
        // </div> */}
    //   </div>
    // </header>
  );
};

export default MainNav;
//Alix's notes
//styling
//links
//buttons?
//photo?
