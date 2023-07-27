import React from 'react';
import {BiCookie} from "react-icons/bi";

const Modal = ({setActive, children}) => {
    return (
        <div className="overlay">
            <div className="modal">
                <div onClick={() => setActive(
                    {
                     isVisibleModalVerstka: false, modalDorabotka: false, modalKey: false,
                })} className="modal__close">
                    <BiCookie size={30} color="#fff"/>
                </div>
                <div className="modal__content">
                    <h3 className="modal__title form__title-color">Форма заказа</h3>
                    <p className="sub__title form__title-color">Заказ на "<span>{children}</span>"</p>
                    <form className="form" action="telegram.php" method="post">
                        <div className="form__group">
                            <input name="name" className="form__input" type="text" placeholder="Как к вам обращаться"/>
                        </div>
                        <div className="form__group modal__content">
                            <h4 className="form__title-color">Контакты</h4>
                            <input name="telegram" className="form__input" type="text" placeholder="Telegram (@login)"/>
                            <input name="email" className="form__input" type="email" placeholder="Email (example@mail.ru)"/>
                            <input name="vkontk" className="form__input" type="text" placeholder="VKontakte (vk.com/you)"/>
                        </div>
                        <div className="form__group modal__content">
                            <h4 className="form__title-color">Описание к заказу</h4>
                            <textarea placeholder="Хочу..." name="description" id="" rows="5"></textarea>
                        </div>
                        <div className="form__group">
                            <button type="submit" className="form__btn">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;