import { QuestionType } from "./enums";
import { BaseMedia } from "./media-models";
import { Option } from "./models";

export interface BaseQuestion {
  id: string;
  type: QuestionType;
}

export interface McqQuestion extends BaseQuestion {
  type: QuestionType.MCQ;
  questionText: string;
  media:BaseMedia|null;
  options: Option[];
  correctOptionId: string;
}
export interface MsqQuestion extends BaseQuestion {
  type: QuestionType.MSQ;
  questionText: string;
  media:BaseMedia|null;
  options: Option[];
  correctOptionIds: string[];
}
export interface TrueFalseQuestion extends BaseQuestion {
  type: QuestionType.TrueFalse;
  questionText: string;
  media:BaseMedia|null;
  correctAnswer: boolean;
}

export type QuizQuestion = McqQuestion | MsqQuestion | TrueFalseQuestion;
export interface Quiz {
  id: string;
  title: string;
  description?: string;
  createdBy: string;
  questions: QuizQuestion[];
  createdAt: Date;
}