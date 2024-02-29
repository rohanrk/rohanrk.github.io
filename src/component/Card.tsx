import * as React from "react";

import '../style/card.css';

interface CardProps {
    title: string;
    subtitle: string;
    date: String
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    return <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-subtitle">{props.subtitle}</p>
        <p className="card-date">{props.date}</p>
    </div>
}

export default Card;