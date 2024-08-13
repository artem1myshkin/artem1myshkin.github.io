import {motion} from 'framer-motion';
const Statistic = ({
    errors,
    totalWords,
    totalSymbols,
    className,
    state,
                   } : {
    errors: number;
    totalWords: number;
    totalSymbols: number;
    className?:string;
    state: string;
}) => {
    const initial = {opacity: 0};
    const animate = {opacity: 1};
    const duration = {duration: 0.3};

    if (state !== 'finish') {
        return null;
    }

    return (
        <motion.ul
            className={`flex flex-col items-center text-primary-400 space-y-3 
            ${className}`}
        >
            <motion.li
                initial={initial}
                animate={animate}
                className="text-xl font-semibold"
                transition={{...duration, delay: 0}}
            >
                Результат
            </motion.li>

            <motion.li
                initial={initial}
                animate={animate}
                transition={{...duration, delay: 0.3}}
            >
                Скорость печати: {totalWords * 2} слов в минуту
            </motion.li>

            <motion.li
                initial={initial}
                animate={animate}
                className="text-red-500"
                transition={{...duration, delay: 0.6}}
            >
                Ошибок: {errors}
            </motion.li>

            <motion.li
               initial={initial}
               animate={animate}
               transition={{...duration, delay: 0.9}}
            >
                Всего символов: {totalSymbols < 0 ? 0 : totalSymbols}
            </motion.li>
        </motion.ul>
    );
};
export default Statistic;