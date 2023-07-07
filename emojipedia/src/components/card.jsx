import React from "react";

function Card(props)
{
    return (
        <div className="card">
            <span>{props.img}</span>
            <h3 >{props.name}</h3>
            <p>{props.desc}</p>
        </div>);
}

export default Card;