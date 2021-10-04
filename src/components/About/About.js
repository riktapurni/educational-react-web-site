import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../img/about.jpg'
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div>
            <Container className="my-5">
              <Row>
              <Col sm={1} md={8}>
                <Card>
                    {/* <Card.Img variant="top" src={img} fluid style={{ height: '400px' }}/> */}
        <Card.Body>
          <Card.Title className="text-success fw-bolder">About Us</Card.Title>
          <Card.Text>
            Mentor originated from the idea that there exists a class of readers who respond better to online content and prefer to learn new skills at their own pace from the comforts of their drawing rooms.

        The journey commenced with a single tutorial on HTML in 2006 and elated by the response it generated, we worked our way to adding fresh tutorials to our repository which now proudly flaunts a wealth of tutorials and allied articles on topics ranging from programming languages to web designing to academics and much more.
          </Card.Text>
          <Card.Text>
            Our content and resources are freely available and we prefer to keep it that way to encourage our readers acquire as many skills as they would like to. We don’t force our readers to sign up with us or submit their details either. No preconditions and no impediments. Simply Easy Learning!
          </Card.Text>
        </Card.Body>

      </Card>
      </Col>
              <Col sm={4} md={4} >
                <Image src={img} fluid />
                
                </Col>
            </Row>
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;