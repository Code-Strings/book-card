import Header from "./Components/Header/Index";
import "./styles.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./Components/Page/Index";

export default function App() {
  const myStyle = {
    background: "linear-gradient(320deg,#390b32,#e94057,#8a2387)",
    height: "fixed-content",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};
  return (
    <div style={myStyle}>
    <Container className="App">
        <Header />
        <Page />
    </Container>
    </div>
  );
}
