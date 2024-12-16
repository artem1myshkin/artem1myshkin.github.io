import React, {useEffect, useState} from 'react';
import { Link as ScrollLink } from "react-scroll";
import "../styles/Header.scss";

const Header: React.FC = () => {

    const [sticky, setSticky] = useState("");

    useEffect(() => {
        console.log("hello");
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    const classes = `main-page__header ${sticky}`;

    return (
        <header className={classes}>
            <div className="container">
                <div className="main-page__header-inner">
                    <div className="main-page__header-logo">
                        <h2>K S
                        studio</h2>
                    </div>
                    <nav className="main-page__header-navigation">
                        <ul className="main-page__header-nav">
                            <li className="main-page__header-nav-elem">
                                <ScrollLink
                                    className="main-page__header-nav-link"
                                    activeClass="active"
                                    to="main-page"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={800}
                                >
                                    Главная
                                </ScrollLink>
                            </li>
                            <li className="main-page__header-nav-elem">
                                <ScrollLink
                                    className="main-page__header-nav-link"
                                    activeClass="active"
                                    to="complectation-page"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={800}
                                >
                                    Комплектация
                                </ScrollLink>
                            </li>
                            <li className="main-page__header-nav-elem">
                                <ScrollLink
                                    className="main-page__header-nav-link"
                                    activeClass="active"
                                    to="montage-page"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={800}
                                >
                                    Монтаж
                                </ScrollLink>
                            </li>
                            <li className="main-page__header-nav-elem">
                                <ScrollLink
                                    className="main-page__header-nav-link"
                                    activeClass="active"
                                    to="contacts-page"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={800}
                                >
                                    Контакты
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;