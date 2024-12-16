import React from "react";
import ImageScroller from "../functionalComponents/ImageScroller.tsx";
import "../styles/Drawings.scss";
import im1 from "../assets/drawings/торцевая левая 1,5.jpg";
import im2 from "../assets/drawings/торцевая правая 1,5.jpg";
import im3 from "../assets/drawings/торцевая длинная левая 1,5.jpg";
import im4 from "../assets/drawings/торцевая длинная правая 1,5.jpg";
import im5 from "../assets/drawings/угол соелинительный 1,5.jpg";

const Drawings: React.FC = () => {
    const images = [
        im1, im2, im3, im4, im5
    ];
    return (
        <section className={"drawings"}>
            <div className={"drawings__image-scroller"}>
                <ImageScroller images={images}/>
            </div>
        </section>
    );
}

export default Drawings;