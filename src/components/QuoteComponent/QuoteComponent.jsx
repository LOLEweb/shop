import React, {useState} from 'react';

const QuoteComponent = ({quote, quotetransl}) => {

    const [transl, setTransl] = useState(false)

    return (
        <li className="quote__item">
            <span onClick={() => setTransl(!transl)} className="quote__btn">💙</span>
            {transl ? quotetransl : quote}
        </li>
    );
};

export default QuoteComponent;