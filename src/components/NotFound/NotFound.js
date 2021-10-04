import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Container>
                <h1 className="text-center">Page not Found-401</h1>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;