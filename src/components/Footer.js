import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon4 from '../assets/nav-icon4.svg';

function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col sm={6} className="text-center text-md-start mb-3 mb-md-0">
                    <img src={logo} alt="My logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href="https://linkedin.com/in/fin-tatum/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn Logo" /></a>
                        <a href="https://github.com/tdtatum2/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub Logo" /></a>
                        <a href="https://www.frontendmentor.io/profile/tdtatum2" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Frontend Mentor Logo" /></a>
                    </div>
                    <p>Copyright 2023. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer