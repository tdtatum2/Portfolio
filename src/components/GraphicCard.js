import { Col } from 'react-bootstrap';

export const GraphicCard = ({title, description, imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className="project-image-box">
            <img src={imgUrl} />
            <div className="project-text">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default GraphicCard