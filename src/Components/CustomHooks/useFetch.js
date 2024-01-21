import axios from "axios";
import { useEffect, useState } from "react";
 
const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get(
            "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
        )
        .then((res) => {
          setData(res.data);
          setLoading(true);
        })
        .catch((error) => console.log(error));
    }, []);
 
  return { data, isLoading };
};
 
export default useFetch;