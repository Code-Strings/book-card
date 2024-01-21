import Header from "./Components/Header/Index";
import "./styles.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./Components/Page/Pagination/Page";

export default function App() {
  const myStyle = {
    background: "linear-gradient(320deg,#390b32,#672407,#6906c6)",
    minHeight: "100vh",
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
