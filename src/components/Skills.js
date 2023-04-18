import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Meter1 from '../assets/meter1.svg';
import Meter2 from '../assets/meter2.svg';
import Meter3 from '../assets/meter3.svg';
import Meter4 from '../assets/meter4.svg';
import colorSharp from '../assets/color-sharp.png';

function Skills() {
    // Defining responsiveness for carousels
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-box">
                            <h2>
                                Skills
                            </h2>
                            <p>I am a junior developer working hard on learning popular web development frameworks while also sharpening my design skills!</p>
                            <Carousel responsive={responsive} infinite={true} showDots={true} removeArrowOnDeviceType={['tablet', 'mobile']} className="skills-slider">
                                <div className="item">
                                    <img src={Meter4} alt="Skill Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="Skill Image" />
                                    <h5>Photoshop</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="Skill Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="Skill Image" />
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp} alt="Color Sharp" className="background-image-left" /> */}
        </section>
    )
}

export default Skills