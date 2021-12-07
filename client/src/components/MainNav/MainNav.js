import React, { useState } from "react";
import Auth from "../../utils/auth";

import { Navbar, Nav, Modal, Tab } from "react-bootstrap";
import "./MainNav.css";

import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../LoginForm/SignupForm";

const MainNav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <Navbar
        id="header-nav"
        className="justify-content-between flex-wrap py-4 toggle-justify"
      >
        <h1 className="display-3 px-4 mx-2 my-2" id="brand">
          Through the Woods
        </h1>
        <Nav className="px-3 mt-2 mx-2 fs-6" id="nav-pages">
          <Nav.Link href="/" className="mx-4 h3">
            HOME
          </Nav.Link>
          <Nav.Link href="/therapy" className="mx-4 h3">
            THERAPY SEARCH
          </Nav.Link>
          {/* Authenticated user nav includes Dashboard and Logout options */}
          {Auth.loggedIn() ? (
            //Need to maintain single parent element or it all borks
            <>
              <Nav.Link href="/dashboard" className="mx-4 h3">
                DASHBOARD
              </Nav.Link>
              <Nav.Link href="/journal" className="mx-4 h3">
                JOURNAL
              </Nav.Link>
              <Nav.Link className="mx-4 h3" onClick={Auth.logout}>
                LOGOUT
              </Nav.Link>
            </>
          ) : (
            <Nav.Link
              className="mx-4 h3"
              onClick={() => setShowLoginModal(true)}
            >
              LOGIN
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
      <Modal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="login-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            {/* Nav links determine which form(component) renders below. Default is Login */}
            <Nav className="justify-content-around">
              <Nav.Link eventKey="login" id="tab-login" className="h3">
                Login
              </Nav.Link>
              <Nav.Link eventKey="signup" id="tab-signup" className="h3">
                Sign Up
              </Nav.Link>
            </Nav>
          </Modal.Header>

          <Modal.Body>
            <Tab.Content>
              {/* Render the relevent for based on with tab is active */}
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowLoginModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm handleModalClose={() => setShowLoginModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default MainNav;
