import React from "react";
import { Card, Row, Col } from "react-bootstrap";
//import 'animate.css';

const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};
const myStyle2 = {
  color: "#403F48",
  backgroundColor: "#95A792",
};
//<h1> Welcome</h1>
//<h1 class="animate__fadeInDown"> {fname}! </h1>
//<h1>Its been {date} since you started your path through the woods</h1>
const UserDashboard = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="./assets/images/2.png" />
          <Card.Body style={myStyle}>
            <Card.Title style={myStyle2}>Card title</Card.Title>
            <Card.Text>Dashboard stuff.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserDashboard;

//Alix's Notes
//needs h1 greeting for user
//CANNOT GET THE PHOTOS TO WORK FOR THE LIFE OF ME
//card on repeat? how to get it to be 4 cards not 1 card 4x
