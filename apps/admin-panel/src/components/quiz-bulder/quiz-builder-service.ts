import { Injectable } from '@angular/core';
import { BaseQuestion, demoQuestions, McqQuestion, Quiz, QuestionType } from '@quiznest/auth';
import { BehaviorSubject } from 'rxjs';
import { QuizHelperService } from './quiz-helper-service';
@Injectable({
  providedIn: 'root',
})
export class QuizBuilderService {
  private questions: BaseQuestion[] = [];
  public selectedQuestion= new BehaviorSubject<BaseQuestion | null>(null);

  quizType$ = this.selectedQuestion.asObservable();

  constructor(public quizHelper:QuizHelperService) {
    this.questions = demoQuestions;
    if(this.questions && this.questions.length > 0){
        this.setSelectedQuestion(this.questions[0]);
    }
  }

  setSelectedQuestion(question:BaseQuestion,id:string|null=null) {
    this.selectedQuestion.next(question);
  }

  getSelectedQuestion(): BaseQuestion | null {
    return this.selectedQuestion.value;
  }

  setSelectedQuestionType(type:QuestionType) {
    if(this.selectedQuestion && this.selectedQuestion.value)
    {
      const newQuestion = this.quizHelper.createDummyQuestion(type) as BaseQuestion;
      newQuestion.id = this.selectedQuestion.value.id;
      const index = this.questions.findIndex(q => q.id === newQuestion.id);
      if (index !== -1) {
        this.questions[index] = newQuestion;
      }
      this.setSelectedQuestion(newQuestion);
    }
  }

  getSelectedQuestionType(): QuestionType | null {
    return this.selectedQuestion?.value?.type || null;
  }

  addQuestion(question: BaseQuestion) {
    this.questions.push(question);
    this.setSelectedQuestion(question);
  }

  getQuestions(): BaseQuestion[] {
    return this.questions;
  }

  clearQuestions() {
    this.questions = [];
  }

  removeQuestion(id: string) {
    this.questions = this.questions.filter(q => q.id !== id);
  }


  addNewSampleQuestion(){
    this.addQuestion(this.getSampleQuestion());
  }

  getSampleQuestion(){
    return {
        id: crypto.randomUUID(),
        questionText: 'What is the capital of France?',
        type: QuestionType.MCQ,
        options: [
          { id: 'a1', text: 'Paris' },
          { id: 'a2', text: 'Berlin' },
          { id: 'a3', text: 'Madrid' },
          { id: 'a4', text: 'Rome' },
        ],
        correctOptionId: 'a1',
      } as McqQuestion
  }
}

