import {useCallback, useState, useRef, useEffect} from "react";
//управление таймером
const useTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    //запускаем таймер, устанавливаем интервал
    const startTimer = useCallback(() => {
        intervalRef.current = setInterval(() => {
           setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
    }, [setTimeLeft]);
    //сбрасываем таймер
    const resetTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setTimeLeft(seconds);
    }, [seconds]);
    //по истечению времени сбрасываем интервал чтобы таймер остановился
    useEffect(() => {
        if(!timeLeft && intervalRef.current){
            clearInterval(intervalRef.current);
        }
    }, [timeLeft]);

    return {timeLeft, startTimer, resetTimer};
};

export default useTimer;