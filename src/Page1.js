import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import img1 from './Img1.png';

function Page1() {

    const handleScrollToProjects = () => {
        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="theme1 py-5">
            <Container className="bg-dark text-white p-5 rounded shadow">
                <Row className="align-items-center">

                    {/* LEFT SIDE - TEXT */}
                    <Col md={8}>
                        <h1 className="fw-bold display-4">Nevil Patel</h1>
                        <p className="lead mt-3">
                            Full Stack Developer specializing in React and .NET.
                            I build responsive, scalable web applications from frontend to database.
                            Currently seeking an opportunity to start my professional journey in tech.
                        </p>

                        <div className="mt-4">
                            <Button
                                onClick={handleScrollToProjects}
                                className="me-3 px-4 py-2"
                                style={{ background: "#22c55e", border: "none" }}
                            >
                                View My Work
                            </Button>

                            <Button
                                as="a"
                                href="/NevilResume.pdf"
                                download="Nevil_Patel_Resume.pdf"
                                variant="outline-light"
                                className="px-4 py-2"
                            >
                                Download Resume
                            </Button>
                        </div>
                    </Col>

                    {/* RIGHT SIDE - IMAGE */}
                    <Col md={4} className="text-center">
                        <img
                            src={img1}
                            alt="Nevil Patel"
                            className="img-fluid rounded-circle shadow"
                            style={{ width: "220px", height: "220px", objectFit: "cover" }}
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Page1;