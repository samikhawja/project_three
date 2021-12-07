import React from "react";
import { Form, Button } from "react-bootstrap";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

const JournalForm = () => {
  return (
    <Form style={myStyle}>
      <Form.Group className="mb-3" controlId="entryTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="entryTitle" placeholder="Todays Entry" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="entryContent">
        <Form.Label>How are you feeling today?</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-success">Submit</Button>{" "}
    </Form>
  );
};

export default JournalForm;
//Alix's notes
//needs styling
// submitEntry needs to do something
// needs 3 checkboxes after checking how it renders
// happy, ambivalent, sad
//form helpers from https://react-bootstrap.github.io/components/forms/
