// DisputeDetails.js

// import React from 'react';
import React, { useState } from 'react';
import './DisputeDetails.css'; // Import CSS file for styling
import { Button, Modal } from 'react-bootstrap';

const DisputeDetails = () => {
  // Sample data for demonstration
  const disputeData = [
    { name: 'Name 1', value: 'Value 1' },
    { name: 'Name 2', value: 'Value 2' },
    { name: 'Name 3', value: 'Value 3' },
    { name: 'Name 4', value: 'Value 4' },
    { name: 'Name 5', value: 'Value 5' },
    { name: 'Name 6', value: 'Value 6' },
    { name: 'Name 7', value: 'Value 7' },
    { name: 'Name 8', value: 'Value 8' },
    { name: 'Name 9', value: 'Value 9' },
    { name: 'Name 10', value: 'Value 10' },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [additionalInfoModalVisible, setAdditionalInfoModalVisible] = useState(false);

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Function to toggle the visibility of the additional info modal
  const toggleAdditionalInfoModal = () => {
    setAdditionalInfoModalVisible(!additionalInfoModalVisible);
  };
  
  return (
    <div>
      <h1>Argus One</h1>
      <div className="dispute-details-container">
        <h2>Dispute Details</h2>
        <div className="form-container">
          <div className="form-column">
            {disputeData.slice(0, Math.ceil(disputeData.length / 2)).map((item, index) => (
              <div className="form-row" key={index}>
                <label>{item.name}</label>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="form-column">
            {disputeData.slice(Math.ceil(disputeData.length / 2)).map((item, index) => (
              <div className="form-row" key={index}>
                <label>{item.name}</label>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='recom'>
         <h2>Recommendations</h2>
        <div>
          <Button onClick={toggleModal} variant="primary">Option 1</Button>
          <Button onClick={toggleModal} variant="success">Option 2</Button>
          <Button onClick={toggleModal} variant="danger">Option 3</Button>

          <Modal show={modalVisible} onHide={toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Option Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Information about the selected option.</p>
              <Button onClick={toggleAdditionalInfoModal} variant="secondary">Additional Info</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={additionalInfoModalVisible} onHide={toggleAdditionalInfoModal}>
            <Modal.Header closeButton>
              <Modal.Title>Additional Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Additional information.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleAdditionalInfoModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>


    </div>
  );
};

export default DisputeDetails;
