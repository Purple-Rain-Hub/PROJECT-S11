import { Col, Container, Row } from "react-bootstrap";

const AppleExplore = () => {
  return (
    <Container fluid className="p-4 bg-apple p-lg-3">
      <div className="ps-lg-3">
        <h2 className="fw-bolder mb-0 text-white" style={{ fontSize: "1.1em" }}>
          Altro da esplorare
        </h2>
        <Row className="pt-2 px-4 align-items-center">
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 me-lg-3"
          >
            <p className="m-0">Esplora per genere</p>
          </Col>
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2 mt-lg-0 me-lg-3"
          >
            <p className="m-0">Decenni</p>
          </Col>
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2 mt-lg-0"
          >
            <p className="m-0">Attività e stati d'anima</p>
          </Col>
        </Row>
        <Row className="px-4 align-items-center">
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2 me-lg-3"
          >
            <p className="m-0">Worldwide</p>
          </Col>
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2 me-lg-3"
          >
            <p className="m-0">Classifiche</p>
          </Col>
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2"
          >
            <p className="m-0">Audio spaziale</p>
          </Col>
        </Row>
        <Row className="px-4 align-items-center">
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2 me-lg-3"
          >
            <p className="m-0">Video musicali</p>
          </Col>
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2 me-lg-3"
          >
            <p className="m-0">Nuovi artisti</p>
          </Col>
          <Col
            lg={3}
            className="p-3 bg-apple-subtle text-danger rounded-3 mt-2"
          >
            <p className="m-0">Hit del passato</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppleExplore;
