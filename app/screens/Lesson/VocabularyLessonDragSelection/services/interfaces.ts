export interface LessonData {
  words: {
    selected: boolean
    id: number
    word: string
  }[]
  image: any
}

export interface BackgroundImageProps {
  data: LessonData
}

export interface WordProps {
  id: number
  word: string
  selected: boolean
  textColor: string
}

export interface Coordinate {
  x: number
  y: number
}

export interface RenderCellsProps {
  arrayIndex: number[]
  lessonData: LessonData
  arrayWord: string[]
  checkArrayIsSelected: number[]
  handleArrayWord: any
}
