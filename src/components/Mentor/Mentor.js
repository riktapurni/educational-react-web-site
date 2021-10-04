import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Mentor = (props) => {
    const {name, img, course} = props.mentor
    return (
        <div>
          <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {course}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default Mentor;