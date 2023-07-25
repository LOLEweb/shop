import React from 'react';

const FooterCard = ({title, img, href, titleClass}) => {
    return (
        <div className="footer__item">
            <h3 className={titleClass}>{title}</h3>
            <img className="footer__img" src={img} alt="icon"/>
            <a target="_blank" className="link card__link" href={href}>Go to</a>
        </div>
    );
};

export default FooterCard;