import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartingPageComponent } from "../../starting-page/starting-page.component";
import { PracticeSetQuiz } from '@quiznest/auth';

@Component({
  selector: 'app-practice-set-quiz',
  imports: [CommonModule, StartingPageComponent],
  templateUrl: './practice-set-quiz.component.html',
  styleUrl: './practice-set-quiz.component.css',
  standalone: true
})
export class PracticeSetQuizComponent {
   @Input() quizDetails:PracticeSetQuiz|null = null;
}
