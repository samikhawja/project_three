import React from "react";
import { Carousel, Card } from "react-bootstrap";
import JournalPhoto from "./../assets/images/2.png";
import TherapyPhoto from "./../assets/images/3.png";
import ResourcesPhoto from "./../assets/images/4.png";
import CalendarPhoto from "./../assets/images/5.png";
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
  paddingBottom: "200px",
};

// Placeholder so the app will build
const Home = () => {
  return (
    <div style={myStyle}>
      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> Quote Api here </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={JournalPhoto} alt="journal" />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img className="d-block w-100" src={CalendarPhoto} alt="calendar" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ResourcesPhoto} alt="resources" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={TherapyPhoto} alt="therapy" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
