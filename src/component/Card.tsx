import * as React from "react";

import '../style/card.css';

interface CardProps {
    title: string | React.ReactNode;
    subtitle?: string;
    date: String
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    return <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <h3 className="card-subtitle"><em>{props.subtitle}</em></h3>
        <p className="card-date">{props.date}</p>
    </div>
}

export default Card;