import {useCallback, useEffect, useState} from "react";
import useText from "./useText.ts";
import useTimer from "./useTimer.ts";
import useTextInput from "./useTextInput.ts";
import {totalErrors, totalWords} from "../utils/utilityFunctions.ts";

export type State = "start" | "run" | "finish";
const textAmount = 25;
const timerDuration = 30;

const useApp = () => {
    const [state, setState] = useState<State>("start");
    const {text, updateText} = useText(textAmount);
    const {timeLeft, startTimer, resetTimer} = useTimer(timerDuration);
    const {entered, cursor, clearEntered, clearTotalEntered, totalEntered} =
        useTextInput(state !== "finish");
    const [errors, setErrors] = useState<number>(0);
    const [words, setWords] = useState<number>(0);
    const isStart = state === "start" && cursor > 0;
    const isTextFinished = cursor === text.length;

    const sumErrors = useCallback(() => {
        const textTotal = text.substring(0, cursor);
        setErrors((prevErr) => prevErr + totalErrors(entered, textTotal));
    }, [entered, cursor, text]);

    const sumWords = useCallback(() => {
        const textTotal = text.substring(0, cursor);
        setWords(totalWords(entered, textTotal));
    }, [entered, cursor, text]);

    useEffect(() => {
        if (isStart) {
            setState("run");
            startTimer();
        }
    }, [isStart, startTimer, cursor]);

    useEffect(() => {
        if (!timeLeft) {
            setState("finish");
            sumErrors();
            sumWords();
        }
    }, [timeLeft, sumErrors, sumWords]);

    useEffect(() => {
        if (isTextFinished) {
            sumErrors();
            sumWords();
            updateText();
            clearEntered();
        }
    }, [cursor, text, clearEntered, entered, isTextFinished, sumErrors, updateText, sumWords]);

    const restart = useCallback(() => {
       resetTimer();
       clearTotalEntered();
       setState("start");
       setErrors(0);
       updateText();
       clearEntered();
    }, [clearEntered, resetTimer, clearTotalEntered, updateText]);

    return {state, text, timeLeft, entered, errors, totalEntered, restart, words, timerDuration};
};

export default useApp;