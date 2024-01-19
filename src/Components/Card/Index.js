import React, { useState } from "react";
import "./Card.css"
import { Container } from "react-bootstrap";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function Card(){
    const [isFlipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!isFlipped);
    };
    //const cardFront = <CardFront handleFlip={handleFlip}/>;
    //const cardBack = <CardBack handleFlip={handleFlip}/>;
    return(
        <Container className={`flip-card ${isFlipped ? "flipped" : ""
            }`}>
            <div className="flip-card-inner mb-5">
                <CardFront handleFlip={handleFlip}/>
                <CardBack handleFlip={handleFlip}/>
            </div>
        </Container>
    );
}