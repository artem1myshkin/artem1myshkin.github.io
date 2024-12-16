import React from 'react';
import "../styles/reduction.scss";

interface ReductionsCardsProps {
    cardText: string;
    spanText: string;
    src: string;
}

const ReductionsCards: React.FC<ReductionsCardsProps> = ({ cardText, spanText, src }) => {
    return (
        <div className="main-page__reductions-card">
            <img src={src} alt="icon" className="main-page__reductions-card__img" />
            <div className="main-page__reductions-card__content">
                <h3 className="main-page__reductions-card__title">{spanText}</h3>
                <p className="main-page__reductions-card__text">{cardText}</p>
            </div>
        </div>
    );
}

export default ReductionsCards;
