import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css'

export const CardList = (props) => {
return <div class='card-list'>
    { 
    props.robots.map(robot => (
    <Card key = {robot.id} robot = {robot} />
    ))
    }</div>
}