import Title from "./Title";
import "./Search/SearchBox.css"
import SearchBox from "./Search/SearchBox";
import useFetch from "../CustomHooks/useFetch";
const url = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json";

export default function Header() {
  const { data } = useFetch(url);
    return <><Title/><SearchBox data={data} Placeholder="Search Book..."/></>
  }
  