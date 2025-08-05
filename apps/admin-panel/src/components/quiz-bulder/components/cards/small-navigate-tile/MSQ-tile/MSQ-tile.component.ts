import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseQuestion, MsqQuestion } from '@quiznest/auth';

@Component({
  selector: 'app-msq-tile',
  imports: [CommonModule],
  templateUrl: './MSQ-tile.component.html',
  styleUrl: './MSQ-tile.component.css',
  standalone: true
})
export class MSQTileComponent {
  @Input() question: BaseQuestion | null = null;
  getQuestion(): MsqQuestion {
    return this.question as MsqQuestion;
  }
}
