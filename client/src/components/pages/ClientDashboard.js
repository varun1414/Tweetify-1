import React from 'react'
import {Table,Button,Modal} from 'react-bootstrap'
import '../../App.css';
import '../ClientDashboard.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function ClientDashboard() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="dashboard__container">
          <Button variant="primary" size="lg" style={{position:'relative',bottom:'70'}}>
      Large button
    </Button>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Report</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>
          
          <Button variant="success">View</Button>
          <Button variant="primary">Compare</Button>
          <Button variant="danger" onClick={() => setModalShow(true)}>Delete</Button>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          
  
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>dft</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default ClientDashboard
