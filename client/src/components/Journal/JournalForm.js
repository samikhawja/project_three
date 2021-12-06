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
      {["checkbox"].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={happy} id={`check-api-${happy}`}>
            <Form.Check.Input type={happy} isValid />
            <Form.Check.Label>{`Happy ${happy}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              Today's a good day
            </Form.Control.Feedback>
          </Form.Check>
          <Form.Check type={ambivalent} id={`check-api-${ambivalent}`}>
            <Form.Check.Input type={ambivalent} isValid />
            <Form.Check.Label>{`Ambivalent ${ambivalent}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              Today's I'm just okay
            </Form.Control.Feedback>
          </Form.Check>
          <Form.Check type={sad} id={`check-api-${sad}`}>
            <Form.Check.Input type={sad} isValid />d
            <Form.Check.Label>{`Sad ${sad}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              Its okay to have a bad day
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}
      <Button variant="primary" type="submitEntry">
        Submit
      </Button>
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
