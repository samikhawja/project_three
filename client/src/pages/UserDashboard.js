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
  paddingBottom: "75px",
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
              <Card.Title style={myStyle2}>LINK JOURNAL HERE</Card.Title>
              <Card.Text>
                Journaling is simply writing down your thoughts and feelings to
                understand them more clearly. If you struggle with stress,
                depression, or anxiety, keeping a journal can be a great idea.
                It can help you gain control of your emotions and improve your
                mental health.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={TherapyPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Therapy Page link</Card.Title>
              <Card.Text>
                The overall goal of mental health therapy is to help you better
                understand and manage how to overcome life's challenges. Whether
                you are experiencing obstacles you believe to be minor or
                significant, it's never too soon to work towards your life goals
                in a constructive way.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={CalendarPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Calendar link</Card.Title>
              <Card.Text>
                Calendars help us cope with change, create healthy habits,
                improve interpersonal relationships, and reduce stress. Studies
                have shown that daily routines have far-reaching mental health
                benefits, from alleviating bipolar disorder and preventing
                substance abuse to managing the symptoms of other mental
                disorders.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={ResourcesPhoto} />
            <Card.Body style={myStyle}>
              <Card.Title style={myStyle2}>Resources Link</Card.Title>
              <Card.Text>
                These services often include counseling, therapy, medication
                management, social work services, peer supports, and substance
                use disorder treatment.
              </Card.Text>
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
