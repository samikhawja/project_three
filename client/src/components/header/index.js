import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import './header.css';

// COMMENTED OUT until auth is set up, same line 12 & 30
// import Auth from "../../utils/auth";

const Header = () => {
  // COMMENTED OUT until auth is set up
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <Navbar id="header-nav" className="justify-content-between flex-wrap py-3 toggle-justify">
      <h1 className="display-2 px-4" id="brand">Through the Woods</h1>
      <Nav className="px-2 fs-6" id="nav-pages">
          <Nav.Link href="/" >
              HOME
          </Nav.Link>
          <Nav.Link href="/therapy">
              THERAPY SEARCH
          </Nav.Link>
          <Nav.Link href="/dashboard">
              DASHBOARD
          </Nav.Link>
        </Nav>
    </Navbar>
    // <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    //   <div
    //     style={myStyle}
    //     className="container flex-row justify-space-between-lg justify-center align-center"
    //   >
    //     <div>
    //       <Link className="text-light" to="/">
    //         <h1 className="m-0">Through the Woods</h1>
    //       </Link>
    //       <p className="m-0">A path forward to a healthier you</p>
    //     </div>
    //     <ul className="flex-row">
    //         <li className="mx-1">
    //             <Link to="/">
    //                 Home
    //             </Link>
    //         </li>
    //         <li className="mx-1">
    //             <Link to="/Therapy">
    //                 Therapy
    //             </Link>
    //         </li>
    //         <li className="mx-1">
    //             <Link to="/dashboard">
    //                 Dashboard
    //             </Link>
    //         </li>
    //         <li className="mx-1">
    //             <Link to="/setting">
    //                 Setting
    //             </Link>
    //         </li>
    //         <li className="mx-1">
    //             <Link to="/journal">
    //                 Journal
    //             </Link>
    //         </li>
    //         <li className="mx-1">
    //             <Link to="/calendar">
    //                 Calendar
    //             </Link>
    //         </li>
    //     </ul>
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

export default Header;
//Alix's notes
//styling
//links
//buttons?
//photo?
