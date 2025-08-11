import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizEditorComponent } from '../quiz-editor/quiz-editor.component';
import { BaseQuiz, QuizSection, QuizType, GameQuiz, CbtQuiz, QuizQuestion } from '@quiznest/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [CommonModule, FormsModule, QuizEditorComponent],
  templateUrl: './quiz-home.component.html',
  styleUrls: ['./quiz-home.component.css'],
})
export class QuizHomeComponent implements OnInit {
  private readonly DRAFT_KEY = 'quizDraft';
  quiz: BaseQuiz = {
    id: Date.now().toString(),
    title: '',
    description: '',
    type: QuizType.GAME,
    createdBy: '',
    createdAt: new Date(),
    isActive: true,
  };

  // Always at least one section for GAME
  sections: QuizSection[] = [
    {
      id: Date.now().toString(),
      title: 'Default Section',
      description: '',
      disclaimer: null,
      questions: []
    }
  ];

  quizTypes = Object.values(QuizType);

  ngOnInit() {
    const draft = localStorage.getItem(this.DRAFT_KEY);
    if (draft) {
      const { quiz, sections } = JSON.parse(draft);
      this.quiz = { ...this.quiz, ...quiz };
      this.sections = sections;
    }
  }
  public saveDraft() {
    localStorage.setItem(this.DRAFT_KEY, JSON.stringify({
      quiz: this.quiz,
      sections: this.sections
    }));
  }


  updateBase<K extends keyof BaseQuiz>(key: K, value: BaseQuiz[K]) {
    this.quiz = { ...this.quiz, [key]: value };
    if (key === 'type') {
      if (value === QuizType.GAME) {
        this.sections = [{
          id: Date.now().toString(),
          title: 'Default Section',
          description: '',
          disclaimer: null,
          questions: []
        }];
      } else {
        this.sections = [];
      }
    }
    this.saveDraft();
  }

  addSection() {
    if (this.quiz.type === QuizType.CBT) {
      this.sections.push({
        id: Date.now().toString(),
        title: '',
        description: '',
        disclaimer: null,
        questions: []
      });
      this.saveDraft();
    }
  }

  removeSection(id: string) {
    if (this.quiz.type === QuizType.CBT) {
      this.sections = this.sections.filter(s => s.id !== id);
      this.saveDraft();
    }
  }
  updateQuestions(sectionIndex: number, questions: QuizQuestion[]) {
    this.sections[sectionIndex].questions = questions;
    this.saveDraft();
  }



  saveQuiz() {
    if (this.quiz.type === QuizType.GAME) {
      const data: GameQuiz = { ...this.quiz, type: QuizType.GAME, questions: this.sections[0].questions };
      console.log('Saving GameQuiz', data);
    } else {
      const data: CbtQuiz = { ...this.quiz, type: QuizType.CBT, sections: this.sections };
      console.log('Saving CBTQuiz', data);
    }
    localStorage.removeItem(this.DRAFT_KEY); // clear draft
  }
  discardDraft() {
    localStorage.removeItem(this.DRAFT_KEY);
    this.quiz = {
      id: Date.now().toString(),
      title: '',
      description: '',
      type: QuizType.GAME,
      createdBy: '',
      createdAt: new Date(),
      isActive: true,
    };
    this.sections = [{
      id: Date.now().toString(),
      title: 'Default Section',
      description: '',
      disclaimer: null,
      questions: []
    }];
  }


}
