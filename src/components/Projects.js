import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import GraphicCard from './GraphicCard';
import projImg1 from '../assets/usstates.png';
import projImg2 from '../assets/astronomy.png';
import projImg3 from '../assets/zippy.png';
import projImg4 from '../assets/smite.png';
import projImg5 from '../assets/react-playground.png';
import projImg6 from '../assets/weather-app.png';
import designImg1 from '../assets/gd1.png';
import designImg2 from '../assets/gd2.png';
import designImg3 from '../assets/gd3.png';
import designImg4 from '../assets/gd4.gif';
import colorSharp2 from '../assets/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {
    const projects = [
        {
            title: "US States Application",
            description: "Back-end web development final project.",
            imgUrl: projImg1,
            projectUrl: "https://github.com/tdtatum2/us-states-application"
        },
        {
            title: "FHSU Astronomy Club",
            description: "Partnered senior capstone project.",
            imgUrl: projImg2,
            projectUrl: "https://github.com/tdtatum2/team-astro"
        },
        {
            title: "Zippy's Used Autos",
            description: "Back-end development project focusing on MySQL databases and PHP back-end.",
            imgUrl: projImg3,
            projectUrl: "https://github.com/tdtatum2/Back-End-Midterm"
        },
        {
            title: "Smite Source Redesign",
            description: "A front-end redesign of a popular gaming website.",
            imgUrl: projImg4,
            projectUrl: "https://tdtatum2.github.io/Smite-Source-Redesign/"
        },
        {
            title: "React Playground",
            description: "A growing collection of small react component projects based on various coding challenges.",
            imgUrl: projImg5,
            projectUrl: "https://tdtatum2.github.io/React-Playground/"
        },
        {
            title: "Weather App",
            description: "A ReactJS project utilizing the OpenMapWeather API to provide current weather information at a user-inputted location.",
            imgUrl: projImg6,
            projectUrl: "https://tdtatum2.github.io/Weather-App/"
        }
        
    ];

    const GDprojects = [
        {
            title: "Merchandise Mockups",
            description: "I created meaningful product mockups for our team!",
            imgUrl: designImg1
        },
        {
            title: "Pitch Decks",
            description: "I worked with our executive team to design enticing pitch decks to present to potential clients and partners!",
            imgUrl: designImg2
        },
        {
            title: "Frame and Badge Design",
            description: "Frames and badges were used to reward users of our site for various achievements as part of our gamification process.",
            imgUrl: designImg3
        },
        {
            title: 'Video Design',
            description: 'I created various videos marketing events and our brand.',
            imgUrl: designImg4
        },        
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>I'm always looking for new, challenging projects to learn from.</p>
                            </div>
                        }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="first">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Graphic Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index}{...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            GDprojects.map((project, index) => {
                                                return(
                                                    <GraphicCard key={index}{...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className='background-image-right' />
        </section>
    )
}

export default Projects