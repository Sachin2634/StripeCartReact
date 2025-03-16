import React, { useContext } from 'react';
import {Button, Container, Navbar,Modal, ModalTitle, ModalBody} from 'react-bootstrap';
import { useState } from 'react';
import { CartContext } from '../CartContext';

function NavbarComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity,0)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Shopping Cart</ModalTitle>
        </Modal.Header>
        <ModalBody>
          {
            productsCount > 0
            ?<>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct,idx) =>(
                <h1>{currentProduct.id}</h1>

              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant='success'>
                Purchase items!
              </Button>
            </>
            :<h1>There are no items in your cart!</h1>

          }
          
        </ModalBody>
        </Modal>
    </>
    
  )
}

export default NavbarComp;