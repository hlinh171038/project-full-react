import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap'; 

function Product({image,title}) {
    return (
            <Card className=" " style={{"height":"auto",margin:'8px',width:'20%'}}>
                <img src={image}  alt="" height=""/>
                <CardBody>
                <Button>Button</Button>
                </CardBody>
            </Card>
    )
}

export default Product
