import React from "react";
import { Table } from "react-router-dom";
import { Table, ListGroup, Modal, Tab} from "react-router-dom";
//import entry title
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

const JournalView = () => {
const [showJournalModal, setShowJournalModal] = useState(false);
  return (
    <div style={myStyle}>
      <Table responsive>  
<Modal
show={showJournalModal}
onHide={() => setShowJournalModal(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  style={myStyle}
  id='journal-modal'
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      fname's Journal
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
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
            <ListGroup>
            <ListGroup.Item action href="#link3">
              entryTitle
            </ListGroup.Item>
            <ListGroup>
            <ListGroup.Item action href="#link4">
              entryTitle
            </ListGroup.Item>
            <ListGroup>
            <ListGroup.Item action href="#link5">
              entryTitle
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <h4> entryDate</h4>
              {/* Render the relevent for based on with tab is active */}
              <p>entryContent</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <h4>entryDate</h4>
              {/* Render the relevent for based on with tab is active */}
              <p>entryContent</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              <h4>entryDate</h4>
              {/* Render the relevent for based on with tab is active */}
              <p>entryContent</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link4">
              <h4>entryDate</h4>
              {/* Render the relevent for based on with tab is active */}
              <p>entryContent</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link5">
              <h4>entryDate</h4>
              {/* Render the relevent for based on with tab is active */}
              <p>entryContent</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={() => setShowLoginModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>
</Table>
</>
);
};

export default JournalView;

// Alix's Notes
// Table with 3 entries
// title is link to entry modal?
