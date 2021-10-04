import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Service = (props) => {
    const {id, courceTitle, image} = props.service;
    const history = useHistory();

    
    const handleDetails = () => {
        history.push(`/services/${id}`)
    }
    return (
        
    <Col>
      <Card>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{courceTitle}</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Button onClick={handleDetails} variant="outline-warning">Details</Button>
      </Card>
    </Col>

    );
};

export default Service;