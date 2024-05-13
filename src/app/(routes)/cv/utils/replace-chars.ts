import { CVHeaderProperty } from '../components/cv-header/CVHeader';

const INTERVAL = 200;

export const replaceChars = (
  property: CVHeaderProperty,
  initialWord: string,
  newWord: string,
  updateCvState: (
    property: CVHeaderProperty,
    value: number,
    newWord: string
  ) => void
): void => {
  // Randomize order of char replacement
  const order: number[] = Array(initialWord.length)
    .fill(null)
    .map((_, i) => i + 1);

  const shuffledOrder = [0, ...order].sort(() => Math.random() - 0.5);

  // Iterate over each char in the word
  // and replace it with the corresponding char in the new word
  shuffledOrder.forEach((value, index) => {
    setTimeout(() => {
      updateCvState(property, value, newWord);
    }, index * INTERVAL);
  });
};
