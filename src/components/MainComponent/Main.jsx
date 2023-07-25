import React, {useState} from 'react';
import './main.css'
import verstka from '../../assets/monitor.png'
import dorabotka from '../../assets/coding.png'
import pod_kluch from '../../assets/key.png'
import coming_soon from '../../assets/coming-soon.png'
import {BiCodeAlt, BiCookie} from "react-icons/bi";
import Card from "../Card";
import Modal from "../Modal";
import card from "../Card";

const Main = () => {

    const [modalVerstka, setModalVerstka] = useState(false)
    const [modalDorabotka, setModalDorabotka] = useState(false)
    const [modalKey, setModalKey] = useState(false)

    return (
        <main className="general-bg">
            <h2 className="head__title_c main__title">Services</h2>
            <div className="main__wrapper">
                <Card title="Вёрстка сайта" img={verstka} modalF={() => setModalVerstka(true)}/>
                <Card title="Доработка сайта" img={dorabotka} modalF={() => setModalDorabotka(true)} />
                <Card title="Сайт под ключ" img={pod_kluch} modalF={() => setModalKey(true)} />
                <Card title="Coming soon..." img={coming_soon} />
            </div>

            <Modal active={modalVerstka} setActive={setModalVerstka} children="Вёрстка сайта" />
            <Modal active={modalDorabotka} setActive={setModalDorabotka} children="Доработка сайта" />
            <Modal active={modalKey} setActive={setModalKey} children="Сайт под ключ" />
        </main>
    );
};

export default Main;