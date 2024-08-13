import {useEffect, useCallback, useState, useRef} from "react";
//определяем чем является нажатая клавиша (специальные символы не будут учитываться)
const isKeyAllowed = (code: string) => {
    return (
        code.startsWith("Key") ||
        code.startsWith("Digit") ||
        code === "Backspace" ||
        code === "Space"
    );
};

const useTextInput = (active: boolean) => {
    const [cursor, setCursor] = useState<number>(0);
    const [entered, setEntered] = useState<string>("");
    const totalEntered = useRef<number>(0);
    //логика обработки нажатой пользователем клавиши (если backspace обрезаем entered на 1 символ, "двигаем курсор назад")
    //если это буква цифра или пробел то прибавляем символ к вводимой пользователем строке и увеличиваем соотв численные значения
    const keydownHandler = useCallback(
        ({key, code}: KeyboardEvent) => {
                    if(!active || !isKeyAllowed(code)) {
                        return;
                    }
                    switch (key) {
                        case "Backspace":
                            setEntered((prev) => prev.slice(0, -1));
                            setCursor(cursor - 1);
                            totalEntered.current -= 1;
                            break;
                        default:
                            setEntered((prev) => prev.concat(key));
                            setCursor(cursor + 1);
                            totalEntered.current += 1;
                    }
    }, [cursor, active]);
    //функция обнуления введенного текста и курсора
    const clearEntered = useCallback(() => {
       setEntered("");
       setCursor(0);
    }, []);
    //функция обнуления общего количествс введенных символов
    const clearTotalEntered = useCallback(() => {
       totalEntered.current = 0;
    }, []);
    //добавлем обработчик нажатия клавиши при создании компонента и убираем его при размонтировке компанента
    useEffect(() => {
        window.addEventListener("keydown", keydownHandler);
        return () => {
            window.removeEventListener("keydown", keydownHandler);
        }
    }, [keydownHandler]);

    return {
        entered,
        cursor,
        clearEntered,
        clearTotalEntered,
        totalEntered: totalEntered.current,
    };
};

export default useTextInput;