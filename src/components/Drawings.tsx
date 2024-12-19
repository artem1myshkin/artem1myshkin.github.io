import React from "react";
import "../styles/Drawings.scss";
import vid1 from "../assets/kstudio.mp4";

const Drawings: React.FC = () => {
    return (
        <section className={"drawings"}>
                <video
                    src={vid1}
                    className="drawings__image-scroller" // Дополнительный класс, если нужно
                    controls // Включает элементы управления (play, pause и т.д.)
                    autoPlay // Автоматическое воспроизведение
                    loop // Зацикливание видео
                    muted // Видео запускается без звука
                />
        </section>
    );
}

export default Drawings;
