import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Container,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./../App.css";
import React from "react";
//import useFetch from "react-fetch-hook";

// require('dotenv').config();
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
  width: "100%",
  height: "100%",
  paddingBottom: "75px",
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
              <option value="3">Rehab Groups</option>
            </Form.Select>
          </FloatingLabel>
          <Form>
            <Row>
              <FloatingLabel
                style={myStyle}
                controlId="floatingSelect"
                label="Choose an option"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Distance</option>
                  <option value="1">miles</option>
                  <option value="2">miles</option>
                  <option value="3">miles</option>
                </Form.Select>
              </FloatingLabel>
            </Row>
            <Button variant="success">Submit</Button>{" "}
            <Row>
              <Col>INSERT GOOGLE API RESPONSE HERE</Col>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  therapist results
                  <Button variant="success">Add Therapist</Button>{" "}
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  group results
                  <Button variant="success">Add AA Support Group</Button>{" "}
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  group results
                  <Button variant="success">Add support Group</Button>{" "}
                </ListGroup.Item>
              </ListGroup>
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
//option values assigned
//pre-converted options of distance
