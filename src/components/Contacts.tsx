import React from "react";
import "../styles/Contacts.scss";
import telegramIcon from "../assets/Telegram_2019_Logo.svg";
import whatsappIcon from "../assets/WhatsApp.svg";

const Contacts: React.FC = () => {
    return (
        <section className="contacts-page">
            <h2 className="contact-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>

            <div className="content-container">
                <div className="input-container">
                    <div className="input-group">
                        <input type="text" placeholder="Имя" className="input-name" />
                        <input type="email" placeholder="Email" className="input-email" />
                    </div>
                    <textarea placeholder="Сообщение" className="input-message"></textarea>
                    <button className="send-button">Отправить</button>
                </div>

                <div className="contact-info">
                    <p className="contact-item black">Телефон</p>
                    <p className="contact-item main-color">+79260726664</p>
                    <p className="contact-item black">Email</p>
                    <p className="contact-item main-color">studioks10@gmail.com</p>
                    <div className="social-icons">
                        <a href="https://t.me/papich_enjoyer" target="_blank" rel="noopener noreferrer">
                            <img src={telegramIcon} alt="Telegram" className="social-icon"/>
                        </a>
                        <a href="https://wa.me/79260726664" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappIcon} alt="WhatsApp" className="social-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
