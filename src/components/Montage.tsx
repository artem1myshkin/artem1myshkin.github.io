import React from "react";
import "../styles/Montage.scss";
import im1 from "../assets/montage/1 замер.jpg";
import im2 from "../assets/montage/2.jpg";
import im3 from "../assets/montage/3.jpg";
import im4 from "../assets/montage/5 (1).jpg";
import im5 from "../assets/montage/6.jpg";
import im6 from "../assets/montage/7 (1).jpg";
import im7 from "../assets/montage/8 (1).jpg";
import MontageStep from "../functionalComponents/MontageStep.tsx";

interface MontageProps {
    isMobile: boolean,
}

const steps = [
    {
        title: "Шаг 1",
        text: "Произведите замеры душевого поддона.\nУкоротите профиль согласно вашим размерам.",
        src: [im1, im2]
    },
    {
        title: "Шаг 2",
        text: "Обезжирьте и очистите поверхность \nдушевого поддона.",
        src: null
    },
    {
        title: "Шаг 3",
        text: "Соберите узлы согласно схемам.\nПри установке на готовый ремонт! Удалите \nдополнительный элемент профиля",
        src: [im3, im4]
    },
    {
        title: "Шаг 4",
        text: "Приклейте профиль к поверхности используя соответствующий герметик или клей.",
        src: [im5]
    },
    {
        title: "Шаг 5",
        text: "Установите декоративные накладки на торцы \nи в угол.",
        src: [im6, im7]
    },
    {
        title: "Шаг 6",
        text: "Все готово! Наслаждайтесь!",
        src: null
    }
];

const Montage:React.FC<MontageProps> = ({isMobile}) => {
    console.log(isMobile);
    return (
        <section className={"montage-page"}>
            <div className={"montage-page__title"}>
                ИНСТРУКЦИЯ ПО СБОРКЕ
            </div>
                {isMobile ? (
                    <section className={"montage-page__content-container"}>
                        <div className={"montage-page__content__single-column"}>
                            {steps.map((step, index) => (
                                <MontageStep
                                    key={index}
                                    title={step.title}
                                    text={step.text}
                                    src={step.src}
                                />
                            ))}
                        </div>
                    </section>
                        ) : (
                        <section className={"montage-page__content-container"}>
                            <div className={"montage-page__content"}>
                                <MontageStep
                                    title={"Шаг 1"}
                                    text={"Произведите замеры душевого поддона.\n" +
                                        "Укоротите профиль согласно вашим размерам."}
                                    src={[im1, im2]}
                                />
                                <MontageStep
                                    title={"Шаг 2"}
                                    text={"Обезжирьте и очистите поверхность \n" +
                                        "душевого поддона."}
                                    src={null}
                                />
                                <MontageStep
                                    title={"Шаг 4"}
                                    text={"Приклейте профиль к поверхности используя соответствующий герметик или клей."}
                                    src={[im5]}
                                />
                                <MontageStep
                                    title={"Шаг 6"}
                                    text={"Все готово! Наслаждайтесь!"}
                                    src={null}
                                />
                            </div>
                            <div className={"montage-page__content-2"}>
                                <MontageStep
                                    title={"Шаг 3"}
                                    text={"Соберите узлы согласно схемам.\n" +
                                        "При установке на готовый ремонт! Удалите \n" +
                                        "дополнительный элемент профиля"}
                                    src={[im3, im4]}
                                />
                                <MontageStep
                                    title={"Шаг 5"}
                                    text={"Установите декоративные накладки на торцы \n" +
                                        "и в угол."}
                                    src={[im6, im7]}
                                />
                            </div>
                        </section>
                        )}
                    </section>
                    );
                };

                export default Montage;
