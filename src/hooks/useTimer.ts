import {useCallback, useState, useRef, useEffect} from "react";

const useTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const startTimer = useCallback(() => {
        intervalRef.current = setInterval(() => {
           setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
    }, [setTimeLeft]);
    const resetTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        if(!timeLeft && intervalRef.current){
            clearInterval(intervalRef.current);
        }
    }, [timeLeft]);

    return {timeLeft, startTimer, resetTimer};
};

export default useTimer;