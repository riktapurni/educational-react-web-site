import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <Container>
                       <h2 className="text-center my-5 text-success">Keep in Touch</h2>
                  <Row className="mt-4">
    <Col sm={8}>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
    </Col>
    <Col sm={4}>
      <h3 className="text-success">Address</h3>
      <p>26/A,lack View</p>
      <p>Uk</p>
    </Col>
  </Row>     
           
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;