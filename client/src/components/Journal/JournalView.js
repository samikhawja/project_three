import React from "react";
import { ListGroup, Modal, Button } from "react-bootstrap";
import { useState } from "react";

//import entry title from user id
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

const JournalView = () => {
  const [showJournalModal, setShowJournalModal] = useState(false);
  return (
    <>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          entryTitle1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          entryTitle2
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          entryTitle
        </ListGroup.Item>
        <ListGroup.Item action href="#link4">
          entryTitle
        </ListGroup.Item>
        <ListGroup.Item action href="#link5">
          entryTitle
        </ListGroup.Item>
      </ListGroup>
      <Button variant="primary" onClick={() => setShowJournalModal(true)}>
        Launch vertically centered modal
      </Button>
      <Modal
        show={showJournalModal}
        onHide={() => setShowJournalModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={myStyle}
        id="journal-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            fname's Journal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              entryTitle1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              entryTitle2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              entryTitle
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              entryTitle
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              entryTitle
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowJournalModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JournalView;
//REDO THIS FORM SOMETHING THREW IT OFF ENTRIELY
