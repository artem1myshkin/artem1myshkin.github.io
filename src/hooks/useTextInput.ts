import {useEffect, useCallback, useState, useRef} from "react";

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

    const clearEntered = useCallback(() => {
       setEntered("");
       setCursor(0);
    }, []);

    const clearTotalEntered = useCallback(() => {
       totalEntered.current = 0;
    }, []);

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