import { faker as faker } from '@faker-js/faker';
import { useState, useCallback } from "react";
//генерируем рандомный текст при помощи факера
const generateText = (num: number) => {
  return  faker.lorem.words(num).toLowerCase();
};
//кастомный хук для генерации и обновления текста
const useText = (num: number) => {
    const [text, setText] = useState<string>(generateText(num));
    const updateText = useCallback(() => {
        setText(generateText(num));
    }, [num]);

    return {text, updateText};
};

export default useText;