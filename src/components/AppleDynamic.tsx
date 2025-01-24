import { Card, Col, Container, Row } from "react-bootstrap";

const AppleDynamic = () => {
  return (
    <Container className="p-3">
      <div>
        <h2 className="fw-bolder" style={{ fontSize: "1.1em" }}>
          Nuove uscite
        </h2>
        <Row>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">Pròlogo con Abuelo</Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">The Wanderer</Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">
                  Michel Bublé & Carly Pearce
                </Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">
                  Chart Spotlight: Julia Michaels
                </Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">Pròlogo con Abuelo</Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">The Wanderer</Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">
                  Michel Bublé & Carly Pearce
                </Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="fs-6 m-0">
                  Chart Spotlight: Julia Michaels
                </Card.Title>
                <Card.Text>Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppleDynamic;
