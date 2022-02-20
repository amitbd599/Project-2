import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home_Card_items = (props) => {
    const {img, title, text}=props;
    return (
        <Col className='home-items-card'>
        <div className="wrap">
            <img className='img-fluid' src={img} alt="" />
        <h5 className='mt-20 fw-bold'>{title}</h5>
        <p className='mt-20'>
         {text}
        </p>
        <div className='mt-20'>
        <Link className="theme-primary-bg my-btn-primary ">
          Learn More
        </Link>
        </div>
      </div>
      </Col>
    );
};

export default Home_Card_items;