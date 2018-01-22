import React from 'react';
import './Card.css'

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <div className="back">
                {props.value}
            </div>
            <div className="front">
                
            </div>
        </div>
    );
}

export default Card;