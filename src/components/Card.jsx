import React from 'react';
import coding from "../assets/monitor.png";

const Card = ({title, img}) => {
    return (
        <div className="block card__setting">
            <h2 className="card__title">{title}</h2>
            <img className="card__img" src={img} alt="code"/>
            <a href="#" className="link card__link">Заказать</a>
        </div>
    );
};

export default Card;