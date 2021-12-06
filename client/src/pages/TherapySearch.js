import { Form, Row, Col, FloatingLabel, Container } from "react-bootstrap";
import "./../App.css";
import React, { useState, useEffect } from "react";
console.log(useState, useEffect);

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
  width: "100%",
  height: "100%",
};
// // External fetch to the google books api endpoint still managed in utils/API, not server implementation
// import { searchGooglePlaces } from '../utils/api';

function TherapySearch() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // Catch if there wasn't any data provided by the user in the search form
  //   if (!searchData) {
  //     return false;
  //   }

  //   try {
  //     // pass through search field data including location and types
  //     const response = await searchGoogleAPI(searchData);

  //     if (!response.ok) {
  //       throw new Error('We encountered an error completing your search.')
  //     }

  //     // convert api response to a JSON object
  //     const { items } = await response.json();

  //     //placeholder to avoid error
  //     console.log(items);

  //   }
  // },
  //Commented this out while we continue work on the API logic, so that the abb will build in the meanwhile
  // useEffect(() => {

  //         .then(res => res.json())
  //         .then(
  //         (result) => {
  //             setIsLoaded(true);
  //             setItems(result);
  //         },
  //         (error) => {
  //             setIsLoaded(true);
  //             setError(error);
  //         }
  //         )
  // }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map(item => (
  //         <li key={item.id}>
  //           {item.name} {item.price}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  return (
    <Container style={myStyle}>
      <Row>
        <div>
          <h1>TherapySearch page placeholder</h1>
          <FloatingLabel controlId="floatingSelect" label="Choose an option">
            <Form.Select aria-label="Floating label select example">
              <option>Options</option>
              <option value="1">AA Support Group</option>
              <option value="2">Therapists Nearby</option>
              <option value="3">Rehab Facilities</option>
            </Form.Select>
          </FloatingLabel>
          <Form>
            <Row>
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Row>
            <Row>
              <Col>INSERT GOOGLE API RESPONSE HERE</Col>
            </Row>
          </Form>
        </div>
      </Row>
    </Container>
  );
}

export default TherapySearch;

//Alix's notes
//options? not quite sure on them
//city, state, zip?
//container to load results
//STYLE!
