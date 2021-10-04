import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Details = () => {
    let {id} = useParams()
    const [courseDetails, setCourseDetails] = useState([])
    const [course, setCourse] = useState({})
    useEffect(() => {
        fetch('/details.json')
        .then(res => res.json())
        .then(data => setCourseDetails(data))
    }, []);

    useEffect(()=> {
        const singleCourseDetails = courseDetails.find(service => service.id === id)
        // console.log(singleCourseDetails)
        setCourse(singleCourseDetails)
    }, [courseDetails])
    
    return (
        <div className="">
            <Container className="text-center mt-5">
            <Card style={{ width: '30rem' }}>
            {/* <Card.Img variant="top" src={course.image} /> */}
            <Card.Body>
                <h3>Course id : {id}</h3>
                {/* <Card.Title>{course.courceTitle}</Card.Title>
                <Card.Text>
                {course.des}
                </Card.Text> */}
            </Card.Body>
            </Card>
            </Container>
           {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default Details;