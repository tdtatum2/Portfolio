import { React, useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import { spy, to, smooth } from 'react-scroll';
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
// import navIcon3 from '../assets/nav-icon3.svg';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    
    

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="My Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#experience" className={ activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://linkedin.com/in/fin-tatum/" target="_blank"><img src={navIcon1} alt="LinkedIn Logo" /></a>
                <a href="https://github.com/tdtatum2/" target="_blank"><img src={navIcon2} alt="GitHub Logo" /></a>
            </div>
            <button onClick={() => {window.location.href='#connect'}}><span>Let's Connect!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default NavBar
