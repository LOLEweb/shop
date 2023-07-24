import React from 'react';
import './head.css'

const Head = () => {
    return (
        <div className="head">
            <div className="head__block block">
                <a target="_blank" href="https://github.com/LOLEweb">
                    <img className="head__avatar" src="https://avatars.githubusercontent.com/u/125983594?v=4" alt="avatar"/>
                </a>
                <h2 className="head__title head__title_c">diziSXD</h2>
                <p className="head__role">Frontend Developer</p>
            </div>
            <div className="details">
                <div className="block about">
                    <h2 className="head__title_c">About me</h2>
                    <p className="about__text">Разработчик сайтов на языке програмированния JavaScript</p>
                </div>
                <div className="part">
                    <div className="block languages">
                        <h2 className="head__title_c">Languages</h2>
                        <ul className="list">
                            <li>CSS & HTML</li>
                            <li>JS</li>
                            <li>PHP</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className="block mention">
                        <h2 className="head__title_c">Mention</h2>
                        <ul className="list">
                            <a target="_blank" href="https://discord.com/channels/@dizisxd" className="link">Дискорд</a>
                            <a target="_blank" href="https://t.me/diziSXD" className="link">Телеграм</a>
                            <a target="_blank" href="https://github.com/LOLEweb" className="link">ГитХаб</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;