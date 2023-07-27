import React from 'react';
import './footer.css'
import weatherApp from '../../assets/icons/cloud.png'
import aboutMe from '../../assets/icons/user.png'
import parallax from '../../assets/icons/tree.png'
import comingSoon from '../../assets/icons/no-wifi.png'
import FooterCard from "../FooterCard";

const Footer = () => {
    return (
        <div className="general-bg footer__bg">
            <h2 className="main__title head__title_c">My works</h2>
            <div className="footer__wrapper">
                <FooterCard title="Weather App" titleClass="weather__title" img={weatherApp} href="https://sxd-weather.netlify.app"/>
                <FooterCard title="About Me" titleClass="about__title" img={aboutMe} href="https://dizisxd.netlify.app"/>
                <FooterCard title="Parallax site" titleClass="parallax__titile" img={parallax} href="https://parallax-eff.netlify.app"/>
                <FooterCard title="No internet" titleClass="internet__title" img={comingSoon} href="https://www.youtube.com/watch?v=xm3YgoEiEDc"/>
            </div>
        </div>
    );
};

export default Footer;