import React from 'react';

const Card = ({title, img, modalF}) => {
    return (
        <div className="block card__setting">
            <h2 className="card__title">{title}</h2>
            <img className="card__img" src={img} alt="code"/>
            <a onClick={modalF} href="#" className="link card__link">Заказать</a>
        </div>
    );
};

export default Card;