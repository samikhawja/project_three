import React from "react";
import { Tab, ListGroup, Col, Row } from "react-router-dom";

const myStyle = {
  color: "#403F48",
  backgroundColor: "#95A792",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};
const History = () => {
  return (
    <Tab.Container
      style={myStyle}
      id="list-group-tabs-example"
      defaultActiveKey="#link1"
    >
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              entryTitle
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              entryTitle
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <p>entryContent</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <p>entryContent</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default History;

//Alix's notes
//styling still
//journal links
//function to add new entry
//{entry content} on 33 & 34 needs to be pulled in
//{entryTitle} on 24 & 27 needs to be pulled in
