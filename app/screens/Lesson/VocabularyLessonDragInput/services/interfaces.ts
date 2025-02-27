export interface LessonData {
    words: {
      filled: boolean;
      id: number;
      word: string;
    }[];
    image: any;
  }
  
export interface DataProps {
    words: {
      filled: boolean;
      id: number;
      word: string;
    }[];
}
  
export interface InputProps {
    data: DataProps;
    getLayout: any;
}

export interface BackgroundImageProps {
    data: LessonData
}

export interface WordProps {
  id: number
  word: string
  filled: boolean;
}