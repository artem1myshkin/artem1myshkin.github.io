import React from "react";
import "../styles/complectationItem.scss";

interface CollectionItemProps {
    text: string[]; // массив строк
    title: string;
    src1: string; // первое изображение
    src2: string; // второе изображение
}

const CollectionItem: React.FC<CollectionItemProps> = ({ text, title, src1, src2 }) => {
    return (
        <div className="complectation-item-card">
            <div className="complectation-item-card__images">
                <img src={src1} alt="icon1" className="complectation-item-card__img" />
                <img src={src2} alt="icon2" className="complectation-item-card__img" />
            </div>
            <div className="complectation-item-card__content">
                <h3 className="complectation-item-card__title">{title}</h3>
                <div className="complectation-item-card__text">
                    {text.map((line, index) => (
                        <p key={index} className="complectation-item-card__line">
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;
