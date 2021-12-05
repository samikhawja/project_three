import React from "react";
import { Container, Row, Col, Button } from "react-router-dom";
//import journalview, journalform
//see more, submit buttons

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

function JournalContainer() {
  return (
    <Container style={myStyle}>
      <Row>
        <Col md={6}>
          JOURNALVIEW <Button variant="outline-success">See more</Button>{" "}
        </Col>
        <Col md={6}>
          JOURNALFORM <Button variant="outline-success">Submit</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default JournalContainer;

//Alix's notes
//"see more" when clicked replaces form + view with history.js
