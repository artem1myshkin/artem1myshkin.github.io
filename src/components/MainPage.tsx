import React from "react";
import "../styles/MainPage.scss";
import ImageScroller from "../functionalComponents/ImageScroller.tsx";
import im1 from "../assets/im1_rr.png";
import im2 from "../assets/im_2.png";
import ReductionCards from "../functionalComponents/ReductionCards.tsx";
import src1 from "../assets/cold_heat.svg";
import src2 from "../assets/anti_bakteria.svg";
import src3 from "../assets/chemical.svg";
import src4 from "../assets/anti_fire.svg";

const MainPage: React.FC = () => {
    const images = [im1, im2];

    return (
        <section className={"main-page"}>
            {/* Контейнер для Image Scroller и текстового блока */}
            <div className={"main-page__content"}>
                {/* Image Scroller */}
                <div className={"main-page__image-scroller"}>
                    <ImageScroller images={images}/>
                </div>

                {/* Текстовый блок */}
                <div className={"main-page__text-block"}>
                    <h2 className={"main-page__text-block-title"}>
                        Декоративный бордюр из PVC - Идеальное решение для вашего интерьера
                    </h2>
                    <p className={"main-page__text-block-text"}>
                        Наш декоративный бордюр, выполненный из высококачественного материала
                        PVC (ПВХ), представляет собой идеальное решение для скрытия швов после
                        установки ванны или душевого поддона.
                    </p>
                </div>
            </div>

            {/* Карточки */}
            <section className={"main-page__cards"}>
                <ReductionCards
                    src={src2}
                    cardText={"Изготовленный из полимера, наш бордюр устойчив к размножению плесени и бактерий, что обеспечивает высокую гигиеничность в ванной комнате."}
                    spanText={"Защита от плесени и бактерий "}
                />
                <ReductionCards
                    src={src3}
                    cardText={"Бордюр не подвержен воздействию щелочей, минеральных масел и кислот, что делает его долговечным и надежным в эксплуатации."}
                    spanText={"Химическая стойкость "}
                />
            </section>
            <section className={"main-page__cards-2"}>
                <ReductionCards
                    src={src1}
                    cardText={"Он сохраняет свои свойства в температурном диапазоне от -35 до +65 градусов Цельсия, что позволяет использовать его в различных климатических условиях."}
                    spanText={"Широкий температурный диапазон "}
                />
                <ReductionCards
                    src={src4}
                    cardText={"Популярность нашего изделия в строительстве обусловлена пожарной безопасностью. Материал трудно воспламеняется и прекращает горение при устранении источника температуры. Это делает бордюр идеальным для объектов с высокими требованиями к пожарной безопасности."}
                    spanText={"Пожарная безопасность "}
                />
            </section>
        </section>
    );

};

export default MainPage;
