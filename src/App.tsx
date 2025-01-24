import "bootstrap/dist/css/bootstrap.min.css";
import AppleNavbar from "./components/AppleNavbar";
import AppleStatic from "./components/AppleStatic";
import AppleExplore from "./components/AppleExplore";
import AppleDynamic from "./components/AppleDynamic";
import AppleFooter from "./components/AppleFooter";

function App() {
  return (
    <>
      <AppleNavbar />
      <AppleStatic />
      <AppleDynamic />
      <AppleExplore />
      <AppleFooter />
    </>
  );
}

export default App;
