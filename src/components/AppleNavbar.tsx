import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppleNavbar() {
  return (
    <>
      <div className=" d-lg-none">
        <Navbar expand="lg" className="bg-dark navbar-dark">
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
    </>
  );
}

export default AppleNavbar;
