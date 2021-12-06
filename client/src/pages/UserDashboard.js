import React from "react";
import { Card, Row, Col } from "react-bootstrap";
//import 'animate.css';
import JournalPhoto from "./../assets/images/2.png";
import TherapyPhoto from "./../assets/images/3.png";
import ResourcesPhoto from "./../assets/images/4.png";
import CalendarPhoto from "./../assets/images/5.png";

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
    <body style={myStyle}>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={JournalPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Card title</Card.Title>
              <Card.Text>Dashboard stuff. LINK</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={TherapyPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Card title2</Card.Title>
              <Card.Text>Dashboard stuff. LINK</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={ResourcesPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Card title3</Card.Title>
              <Card.Text>Dashboard stuff. LINK</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={CalendarPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Card title4</Card.Title>
              <Card.Text>LINK</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </body>
  );
};

export default UserDashboard;

//Alix's Notes
//needs h1 greeting for user
//crying in lack of responsive layout
//cutoff bottom two cards in fullscreen?
