import Header from "./components/Header.tsx";
import MainPage from "./components/MainPage.tsx";
import Complectation from "./components/Complectation.tsx";
import Drawings from "./components/Drawings.tsx";
import Montage from "./components/Montage.tsx";
import Invintational from "./components/Invintational.tsx";
import Patents from "./components/Patents.tsx";
import Contacts from "./components/Contacts.tsx";
import { useEffect, useState } from "react";

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
    };

    useEffect(() => {
        // Устанавливаем обработчик события resize
        window.addEventListener('resize', handleResize);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Header />
            <MainPage />
            <Complectation/>
            <Drawings />
            <Montage isMobile={isMobile}/>
            <Invintational />
            <Patents />
            <Contacts />
        </>
    );
};

export default App;
