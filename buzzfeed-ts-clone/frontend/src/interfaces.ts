interface QuizData {
  id?: string;
  quizId?: string;
  title?: string;
  subtitle?: string;
  questions?: Questions[];
  results?: Answer[];
}

interface Questions {
  id: number;
  title: string;
  options: Option[];
}

// interface Options {
//   options: Option;
// }

interface Option {
  text: string;
  image: string;
  alt: string;
  credit: string;
}

// interface Answers {
//   results: Answer;
// }

interface Answer {
  combination: string[];
  text: string;
  image: string;
  alt: string;
  credit: string;
}

export type { QuizData, Questions, Option, Answer };
