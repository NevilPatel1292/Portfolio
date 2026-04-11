import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img2 from "./Img2.png";

function About1() {
    return (
        <div className="theme1 py-5">
            <Container className="bg-dark text-white p-5 rounded shadow">

                <h1 className="text-center mb-5">
                    <u>About Me</u>
                </h1>

                <Row className="align-items-center">

                    {/* IMAGE COLUMN */}
                    <Col md={4} className="text-center mb-4 mb-md-0">
                        <img
                            src={Img2}
                            alt="Nevil Patel"
                            className="img-fluid rounded-circle shadow"
                            style={{
                                width: "220px",
                                height: "220px",
                                objectFit: "cover"
                            }}
                        />
                    </Col>

                    {/* TEXT COLUMN */}
                    <Col md={8} style={{ fontSize: "18px" }}>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                I am a passionate Full Stack Developer focused on building modern,
                                responsive, and user-friendly web applications. I enjoy turning
                                complex problems into simple and efficient digital solutions.
                            </li>

                            <li className="mb-3">
                                I work with technologies like React and Bootstrap for frontend
                                development, and .NET for backend development, along with MySQL
                                for database management. I aim to build scalable, clean, and
                                performance-driven applications.
                            </li>

                            <li>
                                What makes me different is my ability to understand both frontend
                                design and backend logic, allowing me to develop complete
                                end-to-end solutions with strong focus on code quality,
                                structure, and user experience.
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default About1;