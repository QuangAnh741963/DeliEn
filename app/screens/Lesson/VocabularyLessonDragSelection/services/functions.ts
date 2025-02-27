import { data as dataAPI } from "./data"
import { LessonData } from "./interfaces"

export const processVocabularyData = (): LessonData => {
  const originalString = dataAPI.words

  const transformedData = originalString
    .split("")
    .map((char, index) => ({ id: index + 1, word: char, selected: false }))

  const initialData: LessonData = {
    words: transformedData,
    image: dataAPI.image,
  }

  return initialData
}

const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const generateAlphabetArray = () => {
  const alphabet = []
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97 + i))
  }
  return alphabet
}

export const generateShuffledAlphabet = () => {
  const alphabet = generateAlphabetArray()
  return shuffleArray([...alphabet])
}

const randomArray = (arrays: number[][]) => {
  const randomIndex = Math.floor(Math.random() * arrays.length)
  return arrays[randomIndex]
}

export const renderIndex = (size: number) => {
  if (size === 2) {
    return randomArray([
      [15, 16],
      [10, 11],
      [10, 15],
    ])
  } else if (size === 3) {
    return randomArray([
      [10, 15, 16],
      [3, 8, 9],
      [5, 10, 15],
    ])
  } else if (size === 4) {
    return randomArray([
      [5, 10, 15, 16],
      [3, 8, 9, 14],
      [5, 6, 11, 12],
    ])
  } else if (size === 5) {
    return randomArray([
      [5, 10, 11, 16, 17],
      [3, 8, 9, 14, 15],
      [5, 6, 7, 12, 17],
    ])
  } else if (size === 6) {
    return randomArray([
      [0, 1, 6, 7, 12, 17],
      [0, 1, 2, 7, 12, 13],
      [0, 5, 6, 11, 12, 17],
    ])
  } else if (size === 7) {
    return randomArray([
      [0, 1, 6, 7, 12, 17, 18],
      [0, 1, 2, 7, 12, 11, 16],
      [0, 5, 6, 11, 12, 17, 18],
    ])
  } else if (size === 8) {
    return randomArray([
      [0, 1, 6, 7, 12, 17, 18, 19],
      [0, 1, 2, 7, 12, 13, 14, 19],
      [0, 5, 6, 11, 12, 17, 18, 19],
    ])
  } else if (size === 9) {
    return randomArray([
      [0, 1, 2, 3, 8, 9, 14, 15, 16],
      [0, 1, 2, 7, 8, 9, 14, 15, 16],
      [0, 5, 6, 11, 12, 17, 18, 19],
    ])
  } else if (size === 10) {
    return [0]
  } else if (size === 11) {
    return [0]
  } else if (size === 12) {
    return [0]
  } else if (size === 13) {
    return [0]
  } else if (size === 14) {
    return [0]
  } else if (size === 15) {
    return [0]
  } else if (size === 16) {
    return [0]
  } else if (size === 17) {
    return [0]
  } else if (size === 18) {
    return [0]
  } else {
    return [0]
  }
}
