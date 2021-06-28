import React from 'react'
import Product from '../products'
import {Row,Col,ListGroup,ListGroupItem,Image, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'

const ProductDetails = ({match}) => {
    const product = Product.find((p)=>p._id===match.params.id)
    return (
        <div>
            <Link to='/'>GO BACK</Link>
            <Row>
                <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                    <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>Price : ₹ {product.price}</ListGroupItem>
                    <ListGroupItem>{product.description}</ListGroupItem>
                </ListGroup>
                </Col>
                <Col md={3}>
                <ListGroupItem>
                    <Row>
                        <Col>Status:</Col>
                        <Col>{product.countInStock>0?'in stock ':'out of stock'} </Col>
                    </Row>
                    <Row>
                      <Button className='btn-dark' type='button'> ADD TO CART</Button>
                    </Row>
                </ListGroupItem>
                </Col>
            </Row>
            
        </div>
    )
}

export default ProductDetails
