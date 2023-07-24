import React from 'react';
import './main.css'
import verstka from '../../assets/monitor.png'
import dorabotka from '../../assets/coding.png'
import pod_kluch from '../../assets/key.png'
import coming_soon from '../../assets/coming-soon.png'
import Card from "../Card";

const Main = () => {
    return (
        <main className="main">
            <h1 className="head__title_c main__title">Услуги</h1>
            <div className="main__wrapper">
                <Card title="Вёрстка сайта" img={verstka} />
                <Card title="Доработка сайта" img={dorabotka} />
                <Card title="Сайт под ключ" img={pod_kluch} />
                <Card title="Coming soon..." img={coming_soon} />
            </div>
        </main>
    );
};

export default Main;