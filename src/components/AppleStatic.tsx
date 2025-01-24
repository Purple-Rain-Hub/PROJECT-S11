// import Carousel from "react-bootstrap/Carousel";

import { Card, Col, Container, Row } from "react-bootstrap";

const AppleStatic = () => {
  return (
    <Container className="p-3 pt-4">
      <h1 className=" fw-bolder">Novità</h1>
      <hr className=" m-2" />
      <div className=" d-flex align-items-end">
        <div className="me-2">
          <p style={{ fontSize: "11px" }} className=" fw-bold m-0">
            NUOVA STAZIONE RADIO
          </p>
          <h6>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h6>
          <img
            src="public\assets\images\1a.png"
            width={"240px"}
            height={"140px"}
            className=" rounded-3"
          />
        </div>
        <div>
          <p style={{ fontSize: "11px" }} className=" fw-bold m-0">
            NUOVA STAZIONE RADIO
          </p>
          <h6>Ecco la nuova casa della musica latina</h6>
          <img
            src="public\assets\images\1b.png"
            width={"240px"}
            height={"140px"}
            className=" rounded-3"
          />
        </div>
      </div>
      <div>
        <h2 className="fw-bolder mt-4" style={{ fontSize: "1.1em" }}>
          Nuovi episodi radio
        </h2>
        <Row>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2a.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6">Pròlogo con Abuelo</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2b.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6">The Wanderer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2c.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6">
                  Michel Bublé & Carly Pearce
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2d.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2e.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6">
                  Chart Spotlight: Julia Michaels
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppleStatic;
