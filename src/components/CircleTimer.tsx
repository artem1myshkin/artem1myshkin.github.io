import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// кастомный таймер
const CirlTimer = ({ timeLeft, duration }: { timeLeft: number; duration: number }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const controls = useAnimation();

    useEffect(() => {
        // вычисляем прогресс и смещение
        const progress = timeLeft / duration;
        const offset = circumference - progress * circumference;

        // обновляем анимацию
        controls.start({
            strokeDashoffset: offset,
            transition: { duration: 1, ease: "linear" },
        });
    }, [timeLeft, duration, circumference, controls]);

    return (
        <svg className="w-30 h-30 items-center">
            <circle
                className="text-gray-300"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="50%"
                cy="50%"
            />
            <motion.circle
                className="text-primary-300"
                strokeWidth="10"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="50%"
                cy="50%"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                animate={controls}
            />
            <text
                className="text-xl font-medium text-primary-400"
                style={{ fill: "currentColor" }}
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
            >
                {timeLeft}s
            </text>
        </svg>
    );
};

export default CirlTimer;
