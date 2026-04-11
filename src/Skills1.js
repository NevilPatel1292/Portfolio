import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skills1() {
    return (
        <div className="py-5 theme1">
            <Container>
                <h1 className="text-center text-white mb-5">
                    <u>Skills</u>
                </h1>

                <Row className="g-4 justify-content-center">

                    {/* Programming */}
                    <Col md={4} lg={3}>
                        <Card className="bg-dark text-white h-100 shadow skill-card border-success">
                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    Programming Languages
                                </Card.Title>
                                <ul className="mt-3">
                                    <li>C</li>
                                    <li>C++</li>
                                    <li>JavaScript</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Frontend */}
                    <Col md={4} lg={3}>
                        <Card className="bg-dark text-white h-100 shadow skill-card border-success">
                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    Frontend
                                </Card.Title>
                                <ul className="mt-3">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>React.js</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Backend */}
                    <Col md={4} lg={3}>
                        <Card className="bg-dark text-white h-100 shadow skill-card border-success">
                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    Backend
                                </Card.Title>
                                <ul className="mt-3">
                                    <li>ASP.NET</li>
                                    <li>Web API</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Database */}
                    <Col md={4} lg={3}>
                        <Card className="bg-dark text-white h-100 shadow skill-card border-success">
                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    Database
                                </Card.Title>
                                <ul className="mt-3">
                                    <li>SQL Server</li>
                                    <li>SSMS</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Tools */}
                    <Col md={4} lg={3}>
                        <Card className="bg-dark text-white h-100 shadow skill-card border-success">
                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    Tools
                                </Card.Title>
                                <ul className="mt-3">
                                    <li>VS Code</li>
                                    <li>Visual Studio</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Skills1;