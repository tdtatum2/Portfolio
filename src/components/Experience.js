import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VMLogo from '../assets/vm-logo.svg';
import colorSharp from '../assets/color-sharp.png';

function Experience() {
    // Defining responsiveness for carousels
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="experiences" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="experiences-box">
                            <h2>
                                Experience
                            </h2>
                            <p>Check out what I've been up to!</p>
                            <Carousel responsive={responsive} infinite={true} showDots={true} removeArrowOnDeviceType={['tablet', 'mobile']} className="experiences-slider">
                                <div className="item">
                                    <Row  className="align-items-center">
                                        <Col>
                                            <img src={VMLogo} alt="VoyceMe Logo" className="experiences-logo" />
                                            <h3 className="experiences-title">Graphic Designer</h3>
                                            <h4 className="experiences-company">VoyceMe</h4>
                                            <h5 className="experiences-dates">March 2022 — March 2023</h5>                                   
                                        </Col>
                                        <Col>
                                            <p>As a graphic designer at VoyceMe, I assisted in creating advertising materials for events,
                                                announcements, merchandise, and more. I also helped to create meaningful product designs,
                                                assisted our UX/UI team by providing assets and input, and worked with our executive team
                                                to create professional pitch decks to market to potential clients and partners.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="Color Sharp" className="background-image-left" />
        </section>
    )
}

export default Experience