import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizBuilderService } from '../../../quiz-builder-service';
import { McqQuestion } from '@quiznest/auth';
import { FormsModule } from '@angular/forms';
import { MainMediaSelectSectionComponent } from '../../media/main-media-select-section/main-media-select-section.component';
import { OptionMediaSelectSectionComponent } from "../../media/option-media-select-section/option-media-select-section.component";
import { QuizHelperService } from '../../../quiz-helper-service';

@Component({
  selector: 'app-mcq-middle-panel',
  imports: [CommonModule, FormsModule, MainMediaSelectSectionComponent, OptionMediaSelectSectionComponent],
  templateUrl: './MCQ-middle-panel.component.html',
  styleUrl: './MCQ-middle-panel.component.css',
  standalone: true
})
export class MCQMiddlePanelComponent {
  constructor(public quizBuilderService:QuizBuilderService, public quizHelperService:QuizHelperService){
  
  }
  getSelectedQuestion():McqQuestion{
    return this.quizBuilderService.getSelectedQuestion() as McqQuestion;
  }
}
