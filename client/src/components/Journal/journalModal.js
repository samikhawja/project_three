function journalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {entryTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{entryDate}</h4>
        <p>{entryContent}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Button Text
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);

//Alix's notes
// modal from https://react-bootstrap.github.io/components/modal/
// need title, date, content
// line 33 needs button text
// needs styling to match Login modal and site (discuss with group)
