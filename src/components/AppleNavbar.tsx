import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppleNavbar() {
  return (
    <>
      <div className=" d-lg-none">
        <Navbar expand="lg" className="bg-apple-subtle navbar-dark px-2">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Novità</Nav.Link>
                <Nav.Link href="#link">Radio</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">
              <img src="public\assets\logos\music.svg" />
            </Navbar.Brand>
            <Nav.Link href="#link" className="text-danger fw-medium">
              Accedi
            </Nav.Link>
          </Container>
        </Navbar>
      </div>
      <div className=" d-none d-lg-block">
        <Navbar className="bg-apple-subtle navbar-dark d-block px-5">
          <Navbar.Brand href="#home">
            <img src="public\assets\logos\music.svg" />
          </Navbar.Brand>
          <Form className="mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <Nav className="me-auto d-block mt-3">
            <Nav.Link href="#home">
              <i className="bi bi-house text-danger me-3 fs-5"></i>Home
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-border-all text-danger me-3 fs-5"></i>Novità
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-broadcast text-danger me-3 fs-5"></i>Radio
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default AppleNavbar;
