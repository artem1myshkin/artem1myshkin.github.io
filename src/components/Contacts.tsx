import React, { useState } from "react";
import "../styles/Contacts.scss";
import telegramIcon from "../assets/Telegram_2019_Logo.svg";
import whatsappIcon from "../assets/WhatsApp.svg";
import { useForm } from "@formspree/react";

const Contacts: React.FC = () => {
    const [state, handleSubmit] = useForm("xeoqbllo");

    // Локальный state для управления полями формы
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Обновление полей формы
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Обработка отправки формы
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await handleSubmit(e);
        if (state.succeeded) {
            alert("Сообщение успешно отправлено!");
            setFormData({ name: "", email: "", message: "" }); // Очистка полей формы
        }
    };

    return (
        <section className="contacts-page">
            <h2 className="contact-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>

            <div className="content-container">
                <form onSubmit={handleFormSubmit} className="input-container">
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя"
                            className="input-name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input-email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        className="input-message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="send-button"
                        disabled={state.submitting}
                    >
                        Отправить
                    </button>
                </form>

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
