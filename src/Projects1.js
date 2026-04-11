import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1_1 from "./Proj1img1.png";
import img1_2 from "./Proj1img2.png";
import img1_3 from "./Proj1img3.png";

import img2_1 from "./Proj2img1.png";
import img2_2 from "./Proj2img2.png";
import img2_3 from "./Proj2img3.png";
import img2_4 from "./Proj2img4.png";

function Projects1() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };
    return (
        <div id="projects" className="theme1 py-5">
            <Container>
                <h1 className="text-center text-white mb-5">
                    <u>Projects</u>
                </h1>

                <Row className="g-4 d-flex justify-content-around">

                    {/* Project 1 */}
                    <Col md={6} lg={4}>
                        <Card className="bg-dark text-white h-100 shadow project-card">
                            {/* <Card.Img variant="top" src={project1} /> */}
                            <Card.Body>
                                <Card.Title>E-Commerce Website</Card.Title>
                                <Card.Text>
                                    A full-stack e-commerce application with product
                                    filtering, cart system, and API integration.
                                </Card.Text>

                                <Slider {...settings} className="mt-5 mb-5">
                                    <img src={img1_1} />
                                    <img src={img1_2} />
                                    <img src={img1_3} />
                                </Slider>

                                <p className="text-success">
                                    React | Bootstrap | .NET Web API | SSMS
                                </p>
                                <div className="d-flex justify-content-between">
                                    <Button variant="outline-light" size="sm">
                                        GitHub
                                    </Button>
                                    <Button
                                        size="sm"
                                        style={{ background: "#22c55e", border: "none" }}
                                    >
                                        Live Demo
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>


                    {/* Project 2 */}
                    <Col md={6} lg={4}>
                        <Card className="bg-dark text-white h-100 shadow project-card">
                            {/* <Card.Img variant="top" src={project3} /> */}
                            <Card.Body>
                                <Card.Title>Blog Website</Card.Title>
                                <Card.Text>
                                    A CRUD-based blog management system with
                                    authentication and API integration.
                                </Card.Text>

                                <Slider {...settings} className="mt-5 mb-5">
                                    <img src={img2_1} />
                                    <img src={img2_2} />
                                    <img src={img2_3} />
                                    <img src={img2_4} />
                                </Slider>

                                <p className="text-success">
                                    React | ASP.NET Core | SSMS
                                </p>
                                <div className="d-flex justify-content-between">
                                    <Button variant="outline-light" size="sm">
                                        GitHub
                                    </Button>
                                    <Button
                                        size="sm"
                                        style={{ background: "#22c55e", border: "none" }}
                                    >
                                        Live Demo
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Projects1;