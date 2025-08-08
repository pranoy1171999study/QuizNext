import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseQuestion, QuestionType } from '@quiznest/auth';
import { MCQTileComponent } from "./MCQ-tile/MCQ-tile.component";
import { MSQTileComponent } from './MSQ-tile/MSQ-tile.component';
import { TrueFalseTileComponent } from './TrueFalse-tile/TrueFalse-tile.component';
import { QuizBuilderService } from '../../../quiz-builder-service';

@Component({
  selector: 'app-small-navigate-tile',
  templateUrl: './small-navigate-tile.component.html',
  styleUrl: './small-navigate-tile.component.css',
  standalone: true,
  imports: [
    CommonModule,
    MCQTileComponent,
    MSQTileComponent,
    TrueFalseTileComponent
  ],
})
export class SmallNavigateTileComponent {
  @Input() question: BaseQuestion | null = null;

  QuizType = QuestionType;

  constructor(public quizBuilderService: QuizBuilderService) {

  }

  onRemoveClick(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.quizBuilderService.removeQuestion(id);
  }


}
