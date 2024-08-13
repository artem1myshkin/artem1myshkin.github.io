import Cursor from "./Cursor.tsx";
import cn from 'classnames';

const TypingController = ({
    inputText,
    text,
    className,
}: {
    inputText: string;
    text: string;
    className?: string;
}) => {
    const typedSymbols = inputText.split("");

    return (
        <div className={className}>
            {typedSymbols.map((char, index) => (
                <Character key={`${char}_${index}`} enteredChar={char} expectedChar={text[index]} />
            ))}
            <Cursor/>
        </div>
    );
};

const Character = ({ enteredChar, expectedChar }: { enteredChar: string, expectedChar: string }) => {
    const isCorrect = enteredChar === expectedChar;
    const isSpaceExpected = expectedChar === " ";
    return <span className={cn({
        "text-red-500": !isCorrect && !isSpaceExpected,
        "text-primary-400": isCorrect && !isSpaceExpected,
        "bg-red-500/50": !isCorrect && isSpaceExpected,
    })}
    >{expectedChar}</span>;
};

export default TypingController;
