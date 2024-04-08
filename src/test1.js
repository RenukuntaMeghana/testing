import React, { useState } from 'react';
import { Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap';

const Test1 = () => {
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
      <Button onClick={toggleModal}>Open Modal</Button>

      <Modal show={modalVisible} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Option Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Information about the selected option.</p>
          <OverlayTrigger
            // trigger="click"
            placement="bottom"
            show={additionalInfoVisible}
            overlay={
              <Popover id="popover">
                <Popover.Title as="h3">Additional Information</Popover.Title>
                <Popover.Content>
                  <p>
                    This is the additional information you requested. 
                    You can write your paragraph text here.
                  </p>
                </Popover.Content>
              </Popover>
            }
          >
            <Button onClick={toggleAdditionalInfoPopover} variant="secondary">Additional Info</Button>
          </OverlayTrigger>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Test1;
