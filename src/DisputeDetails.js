import React, { useState } from 'react';
import './DisputeDetails.css'; // Import CSS file for styling
import { Accordion, Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap'

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
  const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleAdditionalInfoPopover = () => {
    setAdditionalInfoVisible(!additionalInfoVisible);
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
         <div className="center-container">
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Option 1</Accordion.Header>
          <Accordion.Body>
            <Button onClick={toggleModal} variant="secondary">Open Modal</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Option 2</Accordion.Header>
          <Accordion.Body>
            <Button onClick={toggleModal} variant="secondary">Open Modal</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Option 3</Accordion.Header>
          <Accordion.Body>
            <Button onClick={toggleModal} variant="secondary">Open Modal</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={modalVisible} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Option Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Information about the selected option.</p>
          <p>About customization</p>
        </Modal.Body>
      </Modal>
    </div>
      </div>
      </div>
  );
};

export default DisputeDetails;
