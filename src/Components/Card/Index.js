import React, { useState } from "react";
import "./Card.css"
import { Container } from "react-bootstrap";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function FlipCard({BookData}) {
    const [isFlipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!isFlipped);
    };
    
    return (
         <>
                    <Container className={`flip-card ${isFlipped ? "flipped" : ""
                        }`}>
                        <div className="flip-card-inner mb-5">
                            <CardFront handleFlip={handleFlip} data={BookData}/>
                            <CardBack handleFlip={handleFlip} data={BookData}/>
                        </div>
                    </Container>
        </>     
    );
}