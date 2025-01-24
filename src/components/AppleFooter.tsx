import { Col, Container, Row } from "react-bootstrap";

const AppleFooter = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end"
          >
            Italia
          </a>
        </Col>
        <Col xs={2}>
          <a href="#" className=" text-decoration-none text-body-tertiary">
            English(UK)
          </a>
        </Col>
      </Row>
      <p>
        Copyright &copy; 2024 <a href="#">Apple Inc.</a> Tutti i diritti
        riservati.
      </p>
      <Row>
        <Col>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end"
          >
            Condizioni dei servizi internet
          </a>
        </Col>
        <Col>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end"
          >
            Apple Music e privacy
          </a>
        </Col>
        <Col>
          <a href="#" className=" text-decoration-none ">
            Avviso sui cookie
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="#"
            className=" text-decoration-none pe-3 border-1 border-end"
          >
            Supporto
          </a>
        </Col>
        <Col>
          <a href="#" className=" text-decoration-none">
            Feedback
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default AppleFooter;
