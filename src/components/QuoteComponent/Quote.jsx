import React from 'react';
import './quote.css'
import QuoteComponent from "./QuoteComponent";
const Quote = () => {
    return (
        <div className="general-bg">
            <h2 className="head__title_c main__title">My favorite quotes 🎖</h2>
            <p className="quote__p">Кликните на сердечко, чтобы перевести цитаты</p>
            <div className="quote__wrapper">
                <ul className="quote__list">
                    <QuoteComponent quote="Strive not for succes, but for the values it gives."  quotetransl="Стремитесь не к успеху, а к ценностям, которые он дает."/>
                    <QuoteComponent quote="The way to get started is to quit talking and begin doing." quotetransl="Чтобы начать, нужно перестать говорить и начать делать." />
                    <QuoteComponent quote="Coding like poetry should be short and concise."  quotetransl="Код, как и поэзия, должно быть коротким и лаконичным." />
                    <QuoteComponent quote="Clean code always looks like it was written by someone who cares." quotetransl="Чистый код всегда выглядит так, как будто его написал кто-то, кому не все равно." />
                    <QuoteComponent quote="We can only learn to love by loving." quotetransl="Мы можем научиться любить, только любя." />
                    <QuoteComponent quote="Live in the present but remember the past" quotetransl="Живи настоящим, но помни прошлое." />
                </ul>
            </div>
        </div>
    );
};

export default Quote;