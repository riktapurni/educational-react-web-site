import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css'
const Banner = () => {
  const history = useHistory()
  const handleAbout = () =>{
    history.push('/about')
  }
    return (
        <div className="banner-container mt-4">
      <div className="banner">
        <div className="">
          <Container>
        <Row xs= {1} md={2}>
            <Col>
            <h1 className="title">
              Learning Today,<br/>Leading Tomorrow
            </h1>
            <h5 className="text-white text-center mt-3">
              You are browsing the best resource for Online Education
            </h5>
            <Button onClick={handleAbout} variant="success">About Us</Button>
            </Col>
            <Col></Col>
        </Row>
        </Container>  
        </div>
      </div>
    </div>
    );
};

export default Banner;