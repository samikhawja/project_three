import React from "react";
import { Modal, Tab, ListGroup, Col, Row, Button } from "react-router-dom";
//import fname from user.js
//import entryDate, entryContent, entryTitle title,body sentiment?
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

function JournalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={myStyle}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          fname Journal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tab.Container
          style={myStyle}
          id="list-group-tabs-example"
          defaultActiveKey="#link1"
        >
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  entryTitle
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  entryTitle
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <h4> entryDate</h4>
                  <p>entryContent</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <h4>entryDate</h4>
                  <p>entryContent</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JournalModal;

//Alix's notes
// modal from https://react-bootstrap.github.io/components/modal/
// need title, date, content
// line 33 needs button text
// needs styling to match Login modal and site (discuss with group)
