import React, { useContext } from 'react';
import {Button, Container, Navbar,Modal, ModalTitle, ModalBody} from 'react-bootstrap';
import { useState } from 'react';
import { CartContext } from '../CartContext';
import {CartProducts} from '../components/CartProducts'

function NavbarComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext);

  const checkout = async() =>{
    await fetch('http://localhost:4000/checkout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) =>{
      return response.json();
    }).then((response) =>{
      if(response.url){
        window.location.assign(response.url);
      }
    })
  }

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
                <CartProducts key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProducts>

              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant='success' onClick={checkout}>
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