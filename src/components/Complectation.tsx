import React from "react";
import "../styles/complectation.scss";
import im1 from "../assets/complects/195_2.jpg";
import im1_1 from "../assets/complects/комплектакция 195.2 1.jpg"
import im2 from "../assets/complects/195_15.jpg";
import im2_1 from "../assets/complects/комплектация 195.15 1.jpg";
import im3 from "../assets/complects/180_3.jpg";
import im3_1 from "../assets/complects/комплектация 180.3 1.jpg";

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
                    text={["Профиль длинна 180 см., ширина 3 см - 2 шт.",
                        "Соединительный угол - 2 шт." ,
                        "Декоративная накладка на соединительный угол - 2шт." ,
                        "Короткая торцевая декоративная накладка лев./прав. - 2 шт."]}
                    src1={im3}
                    src2={im3_1}
                />
                <ComplectationItem
                    title={"KPD 195 / 2"}
                    text={["Профиль длинна 195 см., ширина 2 см - 2 шт.",
                        "Соединительный угол - 2 шт.",
                        "Декоративная накладка на соединительный угол - 2шт.",
                        "Короткая торцевая декоративная накладка лев./прав. - 2 шт."]}
                    src1={im1}
                    src2={im1_1}
                />
                <ComplectationItem
                    title={"KPD 195 / 1.5"}
                    text={["Профиль длинна 195 см., ширина 1.5 см - 2 шт.",
                        "Соединительный угол - 2 шт.",
                        "Декоративная накладка на соединительный угол - 2шт.",
                        "Короткая торцевая декоративная накладка лев./прав. - 2 шт.",
                        "Длинная торцевая декоративная накладка лев./прав. - 2 шт."]}
                    src1={im2}
                    src2={im2_1}
                />
            </div>
        </section>
    );
}

export default Complectation;