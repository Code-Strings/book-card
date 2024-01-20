import { Form, InputGroup} from "react-bootstrap"
import Title from "./Title"

export default function Header() {
    return <><Title/><div className="p-4" style={{display:"flex"}}>
    <InputGroup >
        <Form.Control
            placeholder="Search Book..."
            aria-label="Search Book..."
        />
    </InputGroup>
    <button className="custom-button" id="button-addon2" style={{height:"50px",width:"150px"}}>
            Button
        </button>
</div></>
  }
  