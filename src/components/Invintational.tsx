import React from "react";
import src1 from "../assets/hands_shake.svg";
import "../styles/Invintational.scss";

const Invintational: React.FC = () => {
    return(
        <section className={"invintational-page"}>
            <div className={"invintational-page__content"}>
                <div className={"invintational-page__text-block"}>
                    Приглашаем к сотрудничеству розничные магазины и оптовые компании!
                </div>
                <img  src={src1} alt={"icon"} className="invintational-page__image-block"/>
            </div>
        </section>
    );
};

export default Invintational;