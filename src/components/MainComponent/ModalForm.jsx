import React from 'react'

function ModalForm() {
  return (
    <form className="form" action="telegram.php" method="post">
                        <div className="form__group">
                            <input name="name" className="form__input" type="text" placeholder="Как к вам обращаться"/>
                        </div>
                        <div className="form__group modal__content">
                            <h4 className="form__title-color">Контакты</h4>
                            <input name="telegram" className="form__input" type="text" placeholder="Telegram (@login)"/>
                            <input name="email" className="form__input" type="email" placeholder="Email (example@mail.ru)"/>
                            <input name="vkontk" className="form__input" type="text" placeholder="VKontakte (vk.com/example)"/>
                        </div>
                        <div className="form__group modal__content">
                            <h4 className="form__title-color">Описание к заказу</h4>
                            <textarea placeholder="Хочу..." name="description" id="" rows="5"></textarea>
                        </div>
                        <div className="form__group">
                            <button type="submit" className="form__btn">Отправить</button>
                        </div>
                    </form>
  )
}

export default ModalForm