import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5">
            <Container className="text-center">
           <div className="copyright py-5">
          &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
        </div>
            </Container>
           
        </div>
    );
};

export default Footer;