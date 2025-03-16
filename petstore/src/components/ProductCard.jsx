import React, { useContext } from 'react'
import { Form, Row, Col, FormLabel } from 'react-bootstrap';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap'
import { CartContext } from '../CartContext';
const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
  return (
    <Card>
        <CardBody>
            <CardImg src={product.img}style={{ height: '120px', width: 'auto' }}/>
            <CardTitle>{product.title}</CardTitle>
            <CardText>₹ {product.price}</CardText>
            {
              productQuantity > 0?
              <>
                <Form as ={Row}>
                  <FormLabel column="true" sm='6'>In Cart: {productQuantity}</FormLabel>
                  <Col sm="6">
                    <Button sm="6" className='mx-2' onClick={()=> cart.addOneToCart(product.id)}>+</Button>
                    <Button sm="6" className='mx-2' onClick={()=> cart.removeOneFromCart(product.id)}>-</Button>
                  </Col>
                </Form>
                <Button variant='danger' onClick={()=> cart.deleteFromCart(product.id)} className='my-2'>Remove From Cart</Button>
              </>
              : <Button variant='primary' onClick={()=> cart.addOneToCart(product.id)}>Add to Cart</Button>
            }
            
        </CardBody>
    </Card>
  )
}

export default ProductCard