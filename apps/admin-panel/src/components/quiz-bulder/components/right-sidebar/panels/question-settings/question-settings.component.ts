import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizEditorBuilderService } from '../../../../quiz-editor/quiz-editor-service';
import { QuestionType } from '@quiznest/auth';

@Component({
  selector: 'app-question-settings',
  imports: [CommonModule],
  templateUrl: './question-settings.component.html',
  styleUrl: './question-settings.component.css',
  standalone: true
})
export class QuestionSettingsComponent {
  public questionTypes = Object.values(QuestionType);

  constructor(public quizBuilderService:QuizEditorBuilderService){

  }
  onQuestionTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as QuestionType;
    this.quizBuilderService.setSelectedQuestionType(value);
  }
}
