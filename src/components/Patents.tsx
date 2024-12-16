import React from "react";
import "../styles/Patents.scss";
import im1 from "../assets/image 1.jpg";
import im2 from "../assets/image 2.jpg";

const Patents: React.FC = () => {
    return (
        <section className="patent-page">
            <h2 className="patent-title">Наши патенты</h2>
            <div className="patent-images">
                <img src={im1} alt="Patent 1" className="patent-image" />
                <img src={im2} alt="Patent 2" className="patent-image" />
            </div>
        </section>
    );
}

export default Patents;
