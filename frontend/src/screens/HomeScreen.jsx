import React from 'react'
import Products from '../products'
import {Row,Col} from 'react-bootstrap'
import ProductScreen from './ProductScreen'
const HomeScreen = () => {
    return (
        <>
        <Row>
            {
                Products.map((product)=>(
                    <Col key={product._id} md={3}>
                    <ProductScreen product={product}/>
                    </Col>
                ))
            }
        </Row>   
        </>
    )
}

export default HomeScreen
