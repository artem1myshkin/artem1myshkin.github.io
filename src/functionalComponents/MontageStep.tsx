import React from "react";
import "../styles/montageItem.scss";

interface MontageStepProps {
    text: string;
    title: string;
    src: string[] | null;
}

const MontageStep: React.FC<MontageStepProps> = ({ text, title, src }) => {
    return (
        <div className="montage-item-card">
            <div className="montage-item-card__content">
                <h3 className="montage-item-card__title">{title}</h3>
                <p className="montage-item-card__text">{text}</p>
            </div>
            {src && src.length > 0 ? (
                <div className="montage-item-card__images">
                    {src.map((src1, index) => (
                        <img key={index} src={src1} alt={"icon"} className="montage-item-card__img" />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default MontageStep;
