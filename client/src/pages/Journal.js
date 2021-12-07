import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import JournalView from "../components/Journal/JournalView";
import JournalForm from "../components/Journal/JournalForm";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

function JournalContainer() {
  return (
    <Container style={myStyle}>
      <Row>
        <Col md={6}>
          <JournalView></JournalView>
        </Col>
        <Col md={6}>
          <JournalForm></JournalForm>
        </Col>
      </Row>
    </Container>
  );
}
export default JournalContainer;
