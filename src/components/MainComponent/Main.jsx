import React, {useState} from 'react';
import './main.css'
import verstka from '../../assets/monitor.png'
import dorabotka from '../../assets/coding.png'
import pod_kluch from '../../assets/key.png'
import coming_soon from '../../assets/coming-soon.png'
import {BiCodeAlt, BiCookie} from "react-icons/bi";
import Card from "../Card";

const Main = () => {

    const [open, setOpen] = useState(false)

    return (
        <main className="main">
            <h1 className="head__title_c main__title">Услуги</h1>
            <div className="main__wrapper">
                <Card title="Вёрстка сайта" img={verstka} modalF={() => setOpen(true)}/>
                <Card title="Доработка сайта" img={dorabotka} />
                <Card title="Сайт под ключ" img={pod_kluch} />
                <Card title="Coming soon..." img={coming_soon} />
            </div>
            <div className={`overlay animated ${open ? 'show' : ''}`}>
                <div className="modal">
                    <div onClick={() => setOpen(false)} className="modal__close">
                        <BiCookie size={30} color="#fff"/>
                    </div>
                    <div className="modal__content">
                        <h3 className="modal__title form__title-color">Форма заказа</h3>
                        <p className="sub__title form__title-color">Заказ на "<span>Вёрстка сайта</span>"</p>
                        <form className="form">
                            <div className="form__group">
                                <input className="form__input" type="text" placeholder="Как к вам обращаться"/>
                                {/*<label className="from__label">Как к вам обращаться</label>*/}
                            </div>
                            <div className="form__group modal__content">
                                <h4 className="form__title-color">Контакты</h4>
                                <input className="form__input" type="text" placeholder="Telegram (@login)"/>
                                <input className="form__input" type="text" placeholder="Email (example@mail.ru)"/>
                                <input className="form__input" type="text" placeholder="VKontakte (vk.com/you)"/>
                            </div>
                            <div className="form__group modal__content">
                                <h4 className="form__title-color">Описание к заказу</h4>
                                <textarea placeholder="Хочу..." name="" id="" rows="5"></textarea>
                            </div>
                            <div className="form__group">
                                <a href="#" className="form__btn">Отправить</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;