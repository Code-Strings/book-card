import Header from "./Components/Header/Index";
import "./styles.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const myStyle = {
    background: "linear-gradient(320deg,#390b32,#672407,#6906c6)",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (
    <div id="body" style={myStyle}>
      <Container className="pt-5 App">
        <Header />
      </Container>
    </div>
  );
}
