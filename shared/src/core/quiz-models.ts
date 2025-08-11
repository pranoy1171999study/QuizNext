import { QuizType } from "./enums";
import { QuizQuestion } from "./question-models";

export interface BaseQuiz {
  id: string;
  title: string;           
  description?: string;    
  type: QuizType;         
  createdBy: string;       
  createdAt: Date;         
  updatedAt?: Date;        
  startDate?: Date;        
  expiryDate?: Date;       
  isActive: boolean;       
}

export interface GameQuiz extends BaseQuiz {
    type:QuizType.GAME,
    questions:QuizQuestion[]
}
export interface CbtQuiz extends BaseQuiz {
    type:QuizType.CBT,
    sections:QuizSection[]
}

export interface QuizSection {
  id: string;                        
  title: string;                     
  description?: string;              
  disclaimer?: string | null;        
  timeLimitMinutes?: number;
  questions:QuizQuestion[]
}

export type QuizItem = GameQuiz | CbtQuiz;
