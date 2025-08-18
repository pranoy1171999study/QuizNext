import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlMedia } from 'shared/src/core/media-models';
import { HtmlViewerComponent } from '../../../shared/html-viewer/html-viewer.component';

@Component({
  selector: 'app-starting-page',
  imports: [CommonModule, HtmlViewerComponent],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.css',
  standalone: true
})
export class StartingPageComponent {
  @Input() pageContent: HtmlMedia | null | undefined = null;
  @Output() start:EventEmitter<void> = new EventEmitter();

  startQuiz(){
    this.start.emit();
  }
}
