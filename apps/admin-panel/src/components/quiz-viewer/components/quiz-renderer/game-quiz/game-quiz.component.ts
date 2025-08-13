import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartingPageComponent } from "../../starting-page/starting-page.component";
import { GameQuiz } from '@quiznest/auth';

@Component({
  selector: 'app-game-quiz',
  imports: [CommonModule, StartingPageComponent],
  templateUrl: './game-quiz.component.html',
  styleUrl: './game-quiz.component.css',
  standalone: true
})
export class GameQuizComponent {
  @Input() quizDetails:GameQuiz|null = null;
}
