import React from 'react';
import './card.style.css'

export const Card = (props) => (
    <div className = "card-container">
        <img src={`https://robohash.org/${props.robot.id}?set=set1`} alt=""/>
        <h1>{props.robot.name}</h1>
        <p>{props.robot.email}</p>
    </div>
)
