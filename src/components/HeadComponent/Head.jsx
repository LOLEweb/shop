import React from 'react';
import './head.css'

const Head = () => {
    return (
        <div className="head">
            <div className="head__block block">
                <img className="head__avatar" src="https://avatars.githubusercontent.com/u/125983594?v=4" alt="avatar"/>
                <h2 className="head__title">diziSXD</h2>
                <p className="head__role">Frontend Developer</p>
            </div>
            <div className="details">
                <div className="block about">
                    <h2>About me</h2>
                    <p className="about__text">Разработчик сайтов на React JS & Tailwind CSS. REACT ONE LOVE</p>
                </div>
                <div className="part">
                    <div className="block languages">
                        <h2>Languages</h2>
                        <ul className="list">
                            <li>CSS & HTML</li>
                            <li>JS</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div className="block mention">
                        <h2>Mention</h2>
                        <ul className="list">
                            <a target="_blank" href="https://discord.com/channels/@dizisxd" className="link">Дискорд</a>
                            <a target="_blank" href="https://t.me/diziSXD" className="link">Телеграм</a>
                            <a target="_blank" href="https://vk.com/kushakov3" className="link">Вк</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;