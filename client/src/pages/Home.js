import React from "react";
import { Carousel } from "react-bootstrap";
import JournalPhoto from "./../assets/images/2.png";
import TherapyPhoto from "./../assets/images/3.png";
import ResourcesPhoto from "./../assets/images/4.png";
import CalendarPhoto from "./../assets/images/5.png";
import Quote from '../components/Quote';

const myStyle = {
  color: "#403F48",
};

const Home = () => {
  return (
    <div style={myStyle}>
      <div className="Row py-3">
        <Quote />
      </div>
      <div className="Row">
        <Carousel className="mb-4 col-12" indicators='false'>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={JournalPhoto} alt="journal" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={CalendarPhoto} alt="calendar" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={ResourcesPhoto} alt="resources" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={TherapyPhoto} alt="therapy" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
