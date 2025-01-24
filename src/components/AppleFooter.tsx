import { Col, Container, Row } from "react-bootstrap";

const AppleFooter = () => {
  return (
    <Container fluid className="bg-footer px-5 py-3">
      <Row>
        <Col xs={2} md={1} className="text-center">
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end text-gray text-white"
          >
            Italia
          </a>
        </Col>
        <Col xs={2} md={2} className="text-center">
          <a href="#" className=" text-decoration-none text-gray">
            English(UK)
          </a>
        </Col>
      </Row>
      <p className="text-gray">
        Copyright &copy; 2024 &nbsp;
        <a href="#" className="text-white text-decoration-none">
          Apple Inc.
        </a>
        &nbsp; Tutti i diritti riservati.
      </p>
      <Row>
        <Col xs={12} md={3}>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end text-gray text-white"
          >
            Condizioni dei servizi internet
          </a>
        </Col>
        <Col xs={12} md={3}>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end text-gray text-white"
          >
            Apple Music e privacy
          </a>
        </Col>
        <Col xs={12} md={3}>
          <a href="#" className=" text-decoration-none text-gray text-white">
            Avviso sui cookie
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end text-gray text-white"
          >
            Supporto
          </a>
        </Col>
        <Col xs={12} md={3}>
          <a href="#" className=" text-decoration-none text-gray text-white">
            Feedback
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default AppleFooter;
