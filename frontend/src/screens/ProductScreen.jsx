import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'

const ProductScreen = ({product}) => {
    return (
        <>
        <Card className="my-3 p-3 rounded">
         <Link to={`/product/${product.id}`}>
             <Card.Img src={product.image} variant="top"/>
         </Link>
         <Card.Body>
             <Link to={`/product/${product._id}`}>
                 <Card.Title>
                     <strong>{product.name}</strong>
                 </Card.Title>
             </Link>
             <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
             </Card.Text>
             <Card.Text as="div">
                 <div className="my-3">
                     $ {product.price} 
                 </div>
             </Card.Text>
             </Card.Body>
             </Card>
        </>
    );
}

export default ProductScreen
