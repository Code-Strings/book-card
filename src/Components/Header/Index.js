import Title from "./Title";
import "./Search/SearchBox.css"
import SearchBox from "./Search/SearchBox";
import { Container } from "react-bootstrap";

export default function Header() {
    return <Container ><Title /><SearchBox Placeholder="Search Book..."/></Container>
  }
  