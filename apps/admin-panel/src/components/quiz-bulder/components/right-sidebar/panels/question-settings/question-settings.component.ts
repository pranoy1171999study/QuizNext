import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizEditorBuilderService } from '../../../../quiz-editor/quiz-editor-service';
import { QuestionType, QuizType } from '@quiznest/auth';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-question-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './question-settings.component.html',
  styleUrl: './question-settings.component.css',
  standalone: true
})
export class QuestionSettingsComponent {
  @Input() quizType:QuizType = QuizType.GAME;
  QuizType = QuizType;
  public questionTypes = Object.values(QuestionType);

  constructor(public quizBuilderService:QuizEditorBuilderService){

  }
  onQuestionTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as QuestionType;
    this.quizBuilderService.setSelectedQuestionType(value);
  }
}
