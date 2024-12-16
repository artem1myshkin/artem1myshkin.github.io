import React from "react";
import "../styles/complectation.scss";
import im1 from "../assets/complects/195_2.jpg";
import im2 from "../assets/complects/195_15.jpg";
import im3 from "../assets/complects/180_3.jpg"
import ComplectationItem from "../functionalComponents/ComplectationItem.tsx";

const Complectation: React.FC = () => {
    return(
        <section className={"complectation-page"}>
            <div className={"complectation-page__title"}>
                Комплектации <br/>
                <span>Комплект упакован в полиэтиленовую пленку</span>
            </div>
            <div className={"complectation-page__content"}>
                <ComplectationItem
                    title={"KPD 180 / 3"}
                    text={"Профиль длинна 180 см., ширина 3 см - 2 шт.\n" +
                        "Соединительный угол - 2 шт.\n" +
                        "Декоративная накладка на соединительный угол - 2шт.\n" +
                        "Короткая торцевая декоративная накладка лев./прав. - 2 шт."}
                    src={im3}
                />
                <ComplectationItem
                    title={"KPD 195 / 2"}
                    text={"Профиль длинна 195 см., ширина 2 см - 2 шт.\n" +
                        "Соединительный угол - 2 шт.\n" +
                        "Декоративная накладка на соединительный угол - 2шт.\n" +
                        "Короткая торцевая декоративная накладка лев./прав. - 2 шт.\n"}
                    src={im1}
                />
                <ComplectationItem
                    title={"KPD 195 / 1.5"}
                    text={"Профиль длинна 195 см., ширина 1.5 см - 2 шт.\n" +
                        "Соединительный угол - 2 шт.\n" +
                        "Декоративная накладка на соединительный угол - 2шт.\n" +
                        "Короткая торцевая декоративная накладка лев./прав. - 2 шт.\n" +
                        "Длинная торцевая декоративная накладка лев./прав. - 2 шт.\n"}
                    src={im2}
                />
            </div>
        </section>
    );
}

export default Complectation;