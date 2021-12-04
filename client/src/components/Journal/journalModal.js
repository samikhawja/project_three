import React from "react";
import { Modal } from "react-router-dom";

function JournalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {entryTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{entryDate}</h4>
        <p>{entryContent}</p>
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
