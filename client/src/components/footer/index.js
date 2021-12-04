import React from "react";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#95A792",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};
const Footer = () => {
  // const location = useLocation();
  // const history = useHistory();
  // console.log(location, history);
  
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div style={myStyle} className="container text-center mb-5">
        <h3>
          {" "}
          If you are in a life threatening situation - don’t use this site.
          {/* TEMP COMMENTED OUT to avoid error until we define resources 
            Call +1 (800) 273-8255 or use these { resources } to get immediate
            help. */}
        </h3>
        <h4>
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          by Sami, Sarah and Alix for UcBerkeley Coding Bootcamp
        </h4>
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
