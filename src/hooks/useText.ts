import { faker as faker } from '@faker-js/faker';
import { useState, useCallback } from "react";

const generateText = (num: number) => {
  return  faker.lorem.words(num).toLowerCase();
};

const useText = (num: number) => {
    const [text, setText] = useState<string>(generateText(num));
    const updateText = useCallback(() => {
        setText(generateText(num));
    }, [num]);

    return {text, updateText};
};

export default useText;