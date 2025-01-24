import { Col, Container, Row } from "react-bootstrap";

const AppleExplore = () => {
  return (
    <Container className="p-3">
      <div>
        <h2 className="fw-bolder mb-0" style={{ fontSize: "1.1em" }}>
          Altro da esplorare
        </h2>
        <Row className="p-2">
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3">
            <p className="m-0">Esplora per genere</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Decenni</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Attività e stati d'anima</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Worldwide</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Classifiche</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Audio spaziale</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Video musicali</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Nuovi artisti</p>
          </Col>
          <Col lg={4} className="p-3 bg-dark text-danger rounded-3 mt-2">
            <p className="m-0">Hit del passato</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppleExplore;
