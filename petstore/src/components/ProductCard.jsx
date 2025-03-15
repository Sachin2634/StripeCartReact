import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap'

const ProductCard = (props) => {
    const product = props.product;
  return (
    <Card>
        <CardBody>
            <CardImg src={product.img}style={{ height: '120px', width: 'auto' }}/>
            <CardTitle>{product.title}</CardTitle>
            <CardText>₹ {product.price}</CardText>
            <Button variant='primary'>Add to Cart</Button>
        </CardBody>
    </Card>
  )
}

export default ProductCard