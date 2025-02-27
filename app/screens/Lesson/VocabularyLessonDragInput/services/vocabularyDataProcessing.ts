import { data as dataAPI } from "./data";
import { LessonData } from "./interfaces"

export const processVocabularyData = (): LessonData => {
  const originalString = dataAPI.words;

  const transformedData = originalString
    .split("")
    .map((char, index) => ({ id: index + 1, word: char, filled: false }));

  const shuffledCharacters = [...transformedData].sort(() => Math.random() - 0.5);

  const initialData: LessonData = {
    words: shuffledCharacters,
    image: dataAPI.image,
  };

  return initialData;
};
