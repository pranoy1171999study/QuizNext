import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizBuilderService } from '../../quiz-builder-service';
import { QuestionType } from '@quiznest/auth';

@Component({
  selector: 'app-right-sidebar',
  imports: [CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css',
  standalone:true
})
export class RightSidebarComponent {
  public questionTypes = Object.values(QuestionType);

  constructor(public quizBuilderService:QuizBuilderService){

  }
  onQuestionTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as QuestionType;
    this.quizBuilderService.setSelectedQuestionType(value);
  }

}
