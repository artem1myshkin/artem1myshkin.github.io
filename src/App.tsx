import RestartButton from "./components/RestartButton.tsx";
import Statistic from "./components/Statistic.tsx";
import TypingController from "./components/TypingController.tsx";
import useApp from "./hooks/useApp.ts";
import CirlTimer from "./components/CircleTimer.tsx";

const App = () => {
    const {state, text, timeLeft, entered, errors,
        totalEntered, restart, words, timerDuration} = useApp();


  return (
      <>
        <TimerContainer>
           <CirlTimer timeLeft={timeLeft} duration={timerDuration}/>
        </TimerContainer>
        <TextContainer>
            <RandomText text={text}/>
            <TypingController className="absolute inset-0" inputText={entered} text={text}/>
        </TextContainer>
        <RestartButton
            className={"mx-auto mt-10 text-slate-500"}
            onRestart={restart}
        />
        <Statistic
            className="mt-10"
            errors={errors}
            totalWords={words}
            totalSymbols={totalEntered}
            state={state}
        />
      </>
  )
};
const TextContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="relative max-w-xl mt-3 text-3xl leading-relaxed breal-all">
            {children}
        </div>
    );
};

const TimerContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            {children}
        </div>
    );
};

const RandomText = ({text}: {text: string}) => {
    return <div className="text-gray-500">{text}</div>
};


export default App
