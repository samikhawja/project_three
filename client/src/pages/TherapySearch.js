import { Form, Row, Col, FloatingLabel, Container } from "react-bootstrap";
import "./../App.css";
import React from "react";
//import useFetch from "react-fetch-hook";

// require('dotenv').config();
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
  width: "100%",
  height: "100%",
};
function TherapySearch() {
  // const { isLoading, error, data } = useFetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.759185,-122.427304&radius=40235&types=doctor&name=addiction_therapy&key=AIzaSyC23nfE1PhzLbG546fR0JtV9PrwJg8iyMY%22)

  // if (isLoading) return "Loading...";
  // if (error) return "Error!";
  // console.log(data.results);

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
