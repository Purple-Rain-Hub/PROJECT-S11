// import Carousel from "react-bootstrap/Carousel";

import { Card, Col, Container, Row } from "react-bootstrap";

const AppleStatic = () => {
  return (
    <Container fluid className="p-4 pt-4 bg-apple p-lg-3">
      <h1 className="ms-1 fw-bolder text-white">Novità</h1>
      <hr className="m-2 text-dark-emphasis" />
      <div className=" d-flex align-items-end ps-lg-3">
        <div className="me-4">
          <p className=" fw-bold m-0 text-gray">NUOVA STAZIONE RADIO</p>
          <h6 className="text-white">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </h6>
          <img
            src="public\assets\images\1a.png"
            width={"350em"}
            // height={"140px"}
            className=" rounded-3"
          />
        </div>
        <div className="me-4 d-none d-lg-block">
          <p className=" fw-bold m-0 text-gray">NUOVA STAZIONE RADIO</p>
          <h6 className="text-white">Ecco la nuova casa della musica latina</h6>
          <img
            src="public\assets\images\1b.png"
            width={"350em"}
            // height={"140px"}
            className=" rounded-3"
          />
        </div>
        <div className="d-none d-xl-block">
          <p className=" fw-bold m-0 text-gray">NUOVA STAZIONE RADIO</p>
          <h6 className="text-white">
            Entra nel nuovo Club Music Radio e ascolta le hit
          </h6>
          <img
            src="public\assets\images\1c.png"
            width={"350em"}
            // height={"140px"}
            className=" rounded-3"
          />
        </div>
      </div>
      <div className=" ps-lg-4">
        <h2 className="fw-bolder mt-4 text-white" style={{ fontSize: "1.1em" }}>
          Nuovi episodi radio
        </h2>
        <Row>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2a.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray">
                  Pròlogo con Abuelo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2b.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray">The Wanderer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2c.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray">
                  Michel Bublé & Carly Pearce
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2d.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2e.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray">
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
