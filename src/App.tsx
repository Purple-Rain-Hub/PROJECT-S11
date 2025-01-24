import "bootstrap/dist/css/bootstrap.min.css";
import AppleNavbar from "./components/AppleNavbar";
import AppleStatic from "./components/AppleStatic";
import AppleExplore from "./components/AppleExplore";
import AppleDynamic from "./components/AppleDynamic";
import AppleFooter from "./components/AppleFooter";
import { Col, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppleMobilePlayer from "./components/AppleMobilePlayer";
import AppleDesktopPlayer from "./components/AppleDesktopPlayer";

function App() {
  return (
    <>
      <Row>
        <Col lg={3} className="p-0 bg-apple-subtle">
          <AppleNavbar />
        </Col>
        <Col lg={9} className="p-0">
          <AppleDesktopPlayer />
          <AppleStatic />
          <AppleDynamic />
          <AppleExplore />
          <AppleFooter />
          <AppleMobilePlayer />
        </Col>
      </Row>
    </>
  );
}

export default App;
