import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog_pagination = () => {
    return (
        <Container className='Blog_pagination'>
            <Row>
                <Col className='mt-20 mb-100'>
                <span>
                    <Link to={'/'} className="fs-15 my-btn-primary">1</Link>
                </span>
                <span>
                    <Link to={'/'} className="fs-15 my-btn-primary">2</Link>
                </span>
                <span>
                    <Link to={'/'} className="fs-15 my-btn-primary">3</Link>
                </span>
                <span>
                    <Link to={'/'} className="fs-15 my-btn-primary">4</Link>
                </span>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Blog_pagination;