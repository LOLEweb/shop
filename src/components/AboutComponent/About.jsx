import React, {useState} from 'react';
import './about.css'
import {BiPlus, BiMinus} from "react-icons/bi";
import Card from "../Card";

const About = () => {

    const [open, setOpen] = useState(false)

    return (
        <section className="favorite__section">
            <div className="favorite__top_nav">
                <h2 className="head__title_c main__title">My </h2>
                <div className="favorite__btn">
                    <BiPlus onClick={() => setOpen(!open)} size={25} color="#fff" />
                </div>
            </div>

            <div className={`${open ? 'favorite__show' : 'favorite__show'} favorite__block`}>
                <div>

                </div>
            </div>
        </section>
    );
};

export default About;