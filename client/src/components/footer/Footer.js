import React from "react";
import './Footer.css';

const Footer = () => {
  // const location = useLocation();
  // const history = useHistory();
  // console.log(location, history);
  
  return (
    <footer className="w-100 mt-auto py-4" id="global-footer">
      <div className="container text-center">
        <h5 className="py-1">
          {" "}
          If you are in a life threatening situation, please call +1 (800) 273-8255.
        </h5>
        <h6>
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          by Sami, Sarah and Alix for UCBerkeley Coding Bootcamp
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
//Alix's Notes
//index.js in footer folder
//needs styling
//need to test colors out?
// link to resources
