import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};
const myStyle2 = {
  color: "#403F48",
  backgroundColor: "#95A792",
};

const UserDashboard = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Card title</Card.Title>
              <Card.Text>Dashboard stuff.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserDashboard;
