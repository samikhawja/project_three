import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { CREATE_JOURNAL } from "../../utils/mutations.js";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

const JournalForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    // sentiment: "",
  });

  const [createJournal] = useMutation(CREATE_JOURNAL);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();

    try {
      const { data } = await createJournal({
        variables: { ...formData },
      });
    } catch (err) {
      console.log("error!");
    }
    setFormData({
      title: "",
      body: "",
    });
  };

  return (
    <Form style={myStyle}>
      <Form.Group className="mb-3" controlId="entryTitle">
        <Form.Label type="title" name="title" value={formData.title}>
          Title
        </Form.Label>
        <Form.Control type="entryTitle" placeholder="Todays Entry" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="entryContent">
        <Form.Label
          name="body"
          onChange={handleInputChange}
          value={formData.body}
        >
          How are you feeling today?
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
        variant="outline-success"
        type="submit"
      >
        Submit
      </Button>{" "}
    </Form>
  );
};

export default JournalForm;
