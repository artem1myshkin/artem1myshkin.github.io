import React from "react";
import "../styles/complectationItem.scss";

interface CollectionItemProps {
    text: string;
    title: string;
    src: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({text, title, src}) => {
    return (
        <div className="complectation-item-card">
            <img src={src} alt="icon" className="complectation-item-card__img"/>
            <div className="complectation-item-card__content">
                <h3 className="complectation-item-card__title">{title}</h3>
                <p className="complectation-item-card__text">{text}</p>
            </div>
        </div>
    );
}

export default CollectionItem;