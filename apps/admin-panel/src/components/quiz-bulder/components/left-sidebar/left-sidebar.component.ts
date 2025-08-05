import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallNavigateTileComponent } from '../cards/small-navigate-tile/small-navigate-tile.component';
import { BaseQuestion, McqQuestion, QuestionType } from '@quiznest/auth';
import { QuizBuilderService } from '../../quiz-builder-service';

@Component({
  selector: 'app-left-sidebar',
  imports: [
    CommonModule,
    SmallNavigateTileComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
  standalone:true
})
export class LeftSidebarComponent {
  public QuizType = QuestionType;

  constructor(public quizBuilderService:QuizBuilderService){

  }

  public getQuestions():BaseQuestion[]{
    return this.quizBuilderService.getQuestions();
  }
}
