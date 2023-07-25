import React from 'react';
import {BiCookie} from "react-icons/bi";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={`overlay animated ${active ? 'show' : ''}`}>
            <div className="modal">
                <div onClick={() => setActive(false)} className="modal__close">
                    <BiCookie size={30} color="#fff"/>
                </div>
                <div className="modal__content">
                    <h3 className="modal__title form__title-color">Форма заказа</h3>
                    <p className="sub__title form__title-color">Заказ на "<span>{children}</span>"</p>
                    <form className="form">
                        <div className="form__group">
                            <input className="form__input" type="text" placeholder="Как к вам обращаться"/>
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
    );
};

export default Modal;