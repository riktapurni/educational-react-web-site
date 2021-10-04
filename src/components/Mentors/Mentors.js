import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Mentor from '../Mentor/Mentor';

const Mentors = () => {
    const [mentors, setMentors] = useState([])
   useEffect(() => {
       fetch('/mentors.json')
       .then(res => res.json())
       .then(data => setMentors(data))
   }, [])
    return (
        <div>
          <Container>
              <h2 className="text-center text-success my-4">Our Mentors</h2>
              <Row xs={1} md={4} className="g-4 my-5">
 
                {
                 mentors.map(mentor => <Mentor
                    key = {mentor.name} 
                    mentor={mentor}></Mentor>)   
                }
            </Row>  
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Mentors;