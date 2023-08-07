import React, {useState} from 'react';
import './main.css'
import verstka from '../../assets/web-site.png'
import dorabotka from '../../assets/revision.png'
import pod_kluch from '../../assets/deal.png'
import coming_soon from '../../assets/coming-soon.png'
import Card from "../Card";
import Modal from "../Modal";

const Main = () => {


    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const handleCardClick = (title) => {
        setIsVisibleModal(true);
        setModalTitle(title);
    }

    return (
        <main className="general-bg">
            <h2 className="head__title_c main__title">Services</h2>
            <div className="main__wrapper">
                <Card title="Вёрстка сайта" img={verstka} modalF={() => handleCardClick("Вёрстка сайта")} />
                <Card title="Доработка сайта" img={dorabotka} modalF={() => handleCardClick("Доработка сайта")} />
                <Card title="Сайт под ключ" img={pod_kluch} modalF={() => handleCardClick("Сайт под ключ")} />
                <Card title="Coming soon..." img={coming_soon} />
            </div>

            { isVisibleModal ? <Modal setActive={setIsVisibleModal} title={modalTitle}/> : undefined}
        </main>
    );
};

export default Main;