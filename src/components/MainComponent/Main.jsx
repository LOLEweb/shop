import React, {useState} from 'react';
import './main.css'
import verstka from '../../assets/monitor.png'
import dorabotka from '../../assets/coding.png'
import pod_kluch from '../../assets/key.png'
import coming_soon from '../../assets/coming-soon.png'
import Card from "../Card";
import Modal from "../Modal";

const Main = () => {


    const [isVisibleMap, setIsVisibleMap] = useState({
        isVisibleModalVerstka: false,
        isVisibleModalDorabotka: false,
        isVisibleModalKey: false,
    })

    return (
        <main className="general-bg">
            <h2 className="head__title_c main__title">Services</h2>
            <div className="main__wrapper">
                <Card title="Вёрстка сайта" img={verstka} modalF={() => setIsVisibleMap({
                    ...isVisibleMap, isVisibleModalVerstka: true
                })}/>
                <Card title="Доработка сайта" img={dorabotka} modalF={() => setIsVisibleMap({
                    ...isVisibleMap, isVisibleModalDorabotka: true
                })} />
                <Card title="Сайт под ключ" img={pod_kluch} modalF={() => setIsVisibleMap({
                    ...isVisibleMap, isVisibleModalKey: true
                })} />
                <Card title="Coming soon..." img={coming_soon} />
            </div>

            { isVisibleMap.isVisibleModalVerstka ? <Modal setActive={setIsVisibleMap} children="Вёрстка сайта"/> : undefined}
            { isVisibleMap.isVisibleModalDorabotka ? <Modal setActive={setIsVisibleMap} children="Доработка сайта"/> : undefined}
            { isVisibleMap.isVisibleModalKey ? <Modal setActive={setIsVisibleMap} children="Сайт под ключ"/> : undefined}

        </main>
    );
};

export default Main;