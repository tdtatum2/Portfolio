import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.status === 200) {
            setStatus({ success: true, message: 'Message sent, thank you!'});
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again!'});
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='justify-content-center'>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2 className="text-center">Get in touch!</h2>
                                </div>
                            }
                        </TrackVisibility>
                        <form onSubmit={handleSubmit}>
                            <Row className="text-center">
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                            {
                                status.message &&
                                <Row className="text-center">
                                    <Col size={12} className="mt-2">
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                </Row>
                                
                            }

                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact