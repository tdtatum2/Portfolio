import { Col } from 'react-bootstrap';
import navIcon2 from '../assets/nav-icon2.svg';

export const ProjectCard = ({title, description, imgUrl, projectUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className="project-image-box">
            <img src={imgUrl} />
            <div className="project-text">
                <h4>{title}</h4>
                <span>{description}</span>
                <span className='social-icon'>
                  <a href={projectUrl} target="_blank"><img src={navIcon2} alt="GitHub Logo" /></a>
                </span>
                
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard