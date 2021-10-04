import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/servicedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
             
    }, []);
    return (
        <div>
            {/* service area start */}
           <Container className="my-5">
               <h2 className="text-center text-success my-4">We provide these Courses</h2>
               <Row xs={1} md={4} className = "g-4">
              {
                  services.map(service => <Service
                    key = {service.id} 
                    service = {service}
                  ></Service>)
              }
              </Row>
               
           </Container>
           {/* service area end */}
           {/* footer start */}
           <Footer></Footer>
        </div>
    );
};

export default Services;