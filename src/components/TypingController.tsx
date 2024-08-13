import Cursor from "./Cursor.tsx";
import cn from 'classnames';

// контроллер ввода текста
const TypingController = ({
    inputText,
    text,
    className,
}: {
    inputText: string;
    text: string;
    className?: string;
}) => {
    const typedSymbols = inputText.split("");  // разбиваем введенный текст на символы

    return (
        <div className={className}>
            {typedSymbols.map((char, index) => (
                // отображаем каждый символ с учетом ввода и ожидаемого текста
                <Character key={`${char}_${index}`} enteredChar={char} expectedChar={text[index]} />
            ))}
            <Cursor/>
        </div>
    );
};

// компонент для отображения одного символа
const Character = ({ enteredChar, expectedChar }: { enteredChar: string, expectedChar: string }) => {
    const isCorrect = enteredChar === expectedChar;  // проверяем правильность символа
    const isSpaceExpected = expectedChar === " ";   // проверяем, что ожидается пробел

    return (
        <span className={cn({
            "text-red-500": !isCorrect && !isSpaceExpected, // неправильный символ
            "text-primary-400": isCorrect && !isSpaceExpected, // правильный символ
            "bg-red-500/50": !isCorrect && isSpaceExpected, // неправильный пробел
        })}
        >
            {expectedChar}
        </span>
    );
};

export default TypingController;
