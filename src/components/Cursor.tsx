import {motion} from "framer-motion";
//анимированный фреймер моушеном курсор, (указывает на последний введенный пользователем символ)
const Cursor = () => {
    return (
        <motion.div
            aria-hidden="true"
            className="inline-block bg-primary-500 w-0.5 h-7"
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            exit={{opacity: 1}}
            transition={{repeat: Infinity, duration: 0.5, ease: "easeInOut"}}
        />
    );
};

export default Cursor;