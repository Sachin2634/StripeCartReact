import React from 'react';
import {Button, Container, Navbar,Modal, ModalTitle, ModalBody} from 'react-bootstrap';
import { useState } from 'react';
function NavbarComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Shopping Cart</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <h1>This is the Modal Body.</h1>
        </ModalBody>
      </Modal>
    </>
    
  )
}

export default NavbarComp;