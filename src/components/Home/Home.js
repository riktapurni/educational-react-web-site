import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Developer from '../Developer/Developer';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/servicedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
             
    }, []);
    const display = services.slice(0,4)
    return (
        <div>
           <Banner></Banner>
           {/* popular Online course  area start*/}
           <Container >
               <h2 className="mt-5 text-center text-success">Our Popular online courses</h2>
           <Row xs={1} md={4} className="g-4 my-4">
           {
            display.map(service => <Service service={service}>

            </Service>)   
           }
           </Row>
           </Container>
           {/* popular Online course  area End*/}
           {/* Developer Practices area start */}
           <Developer></Developer>
           {/* Footer start */}
           <Footer></Footer>
        </div>
    );
};

export default Home;