import React from 'react';
import {BiCookie} from "react-icons/bi";
import ModalForm from './MainComponent/ModalForm';

const Modal = ({setActive, title}) => {
    return (
        <>
            <div onClick={() => setActive(false)} className="overlay"></div>
            <div className="modal">
                    <h3 className="modal__title form__title-color">Форма заказа</h3>
                    <p className="sub__title form__title-color">Заказ на "<span>{title}</span>"</p>
                    <BiCookie size={35} color="#fff" onClick={() => setActive(false)} className="modal__close" />
                    <ModalForm />
            </div>
        </>
        
    );
};

export default Modal;