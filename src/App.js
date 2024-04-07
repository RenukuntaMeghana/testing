import logo from './logo.svg';
import './App.css';
import DisputeDetails from './DisputeDetails';
import Test1 from './test1';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">

      <DisputeDetails/>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Open Modal
      </Button>

      <Test1
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
