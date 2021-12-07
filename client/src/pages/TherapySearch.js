import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Container,
  Button,
} from "react-bootstrap";
import "./../App.css";
import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH } from "../utils/queries";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
  width: "100%",
  height: "100%",
};
function TherapySearch() {
  const [getSearch, {loading, error, data}] = useLazyQuery(SEARCH)
  useEffect(() => {
    if(data) {
      try {const result = JSON.parse(data.searchTherapy.result)
        console.log(result)
        console.log("it's parsed")
      }
      catch (error){
        console.log(data.searchTherapy.result)
        console.error(error)
      }
    }
  }, [data])
  function beginSearch (){
    getSearch()
  }
  if (error) return ("Error", error)
  if (loading) return "Loading...";

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
                <Form.Control placeholder="Within (  )" />
              </Col>
              <Col>
                <Form.Control placeholder="Within (  )" />
              </Col>
              <Col>
                <Form.Control placeholder="Within (  )" />
              </Col>
            </Row>
            <Button variant="success" onClick={beginSearch}>Submit</Button>{" "}
            <Row>
              <Col>Hello World</Col>
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
