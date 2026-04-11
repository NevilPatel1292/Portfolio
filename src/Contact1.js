import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact1() {
    return (
        <div className="theme1 py-5">
            <Container>
                <h1 className="text-center text-white mb-5">
                    <u>Contact</u>
                </h1>

                <Row className="g-5">

                    {/* LEFT - FORM */}
                    <Col md={6}>
                        <Form className="bg-dark text-white p-4 rounded shadow">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                            </Form.Group>

                            <Button
                                type="submit"
                                className="w-100"
                                style={{ background: "#22c55e", border: "none" }}
                            >
                                Send Message
                            </Button>
                        </Form>
                    </Col>

                    {/* RIGHT - CONTACT INFO */}
                    <Col md={6} className="text-white d-flex align-items-center">
                        <div>
                            <h5>Email</h5>
                            <p>nevilpatel1292@gmail.com</p>

                            <h5>Phone</h5>
                            <p>9723033470</p>

                            <h5>LinkedIn</h5>
                            <a
                                href="https://www.linkedin.com/in/nevil-patel-3818a024b"
                                target="_blank"
                                rel="noreferrer"
                                className="text-success"
                            >
                                linkedin.com/in/nevil-patel-3818a024b
                            </a><br />

                            <h5>GitHub</h5>
                            <a
                                href="https://github.com/NevilPatel1292"
                                target="_blank"
                                rel="noreferrer"
                                className="text-success"
                            >
                                https://github.com/NevilPatel1292
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Contact1;