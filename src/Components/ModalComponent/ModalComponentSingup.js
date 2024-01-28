import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col } from 'reactstrap';
import SignUp from '../../Pages/SignUp/SignUp';


const ModalComponentSingup = ({ showModal, onHide}) => {
           
  return (
    <Modal isOpen={showModal} toggle={onHide} >
      <ModalHeader toggle={onHide} >
        Please Fill SignUp Form with your credentials
      </ModalHeader>
      <ModalBody className='Productmodal-content' onClick={(e) => e.stopPropagation()}>
        <SignUp />
       
        
      </ModalBody>
      <ModalFooter>
       <h5>SignUp </h5>   
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponentSingup;


