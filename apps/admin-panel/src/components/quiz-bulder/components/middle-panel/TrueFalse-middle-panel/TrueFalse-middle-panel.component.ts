import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizBuilderService } from '../../../quiz-builder-service';
import { TrueFalseQuestion } from '@quiznest/auth';
import { FormsModule } from '@angular/forms';
import { MainMediaSelectSectionComponent } from '../../media/main-media-select-section/main-media-select-section.component';

@Component({
  selector: 'app-true-false-middle-panel',
  imports: [CommonModule, FormsModule, MainMediaSelectSectionComponent],
  templateUrl: './TrueFalse-middle-panel.component.html',
  styleUrl: './TrueFalse-middle-panel.component.css',
  standalone: true,
})
export class TrueFalseMiddlePanelComponent {
  constructor(public quizBuilderService: QuizBuilderService) {}
  getSelectedQuestion(): TrueFalseQuestion {
    return this.quizBuilderService.getSelectedQuestion() as TrueFalseQuestion;
  }
}
