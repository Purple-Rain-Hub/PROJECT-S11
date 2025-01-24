import { Card, Col, Container, Row } from "react-bootstrap";

const AppleDynamic = () => {
  return (
    <Container fluid className="p-4 bg-apple p-lg-3">
      <div className="ps-lg-3 ">
        <h2 className="fw-bolder text-white" style={{ fontSize: "1.1em" }}>
          Nuove uscite
        </h2>
        <Row>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Pròlogo con Abuelo
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  The Wanderer
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Michel Bublé & Carly Pearce
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Chart Spotlight: Julia Michaels
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Pròlogo con Abuelo
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  The Wanderer
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Michel Bublé & Carly Pearce
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} lg={2} className="p-2 d-none d-lg-block">
            <Card className=" border-0 bg-apple">
              <Card.Img variant="top" src="public\assets\images\2f.png" />
              <Card.Body className="p-0">
                <Card.Title className="text-gray text-white m-0">
                  Chart Spotlight: Julia Michaels
                </Card.Title>
                <Card.Text className="text-gray">Artist Placeholder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppleDynamic;
