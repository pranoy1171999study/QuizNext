import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItem, TextMedia } from 'shared/src/core/media-models';
import { FormsModule } from '@angular/forms';
import { MediaType } from '@quiznest/auth';

@Component({
  selector: 'app-media-select-text',
  imports: [CommonModule,  FormsModule],
  templateUrl: './media-select-text.component.html',
  styleUrl: './media-select-text.component.css',
  standalone: true,
})
export class MediaSelectTextComponent implements OnInit {
  @Input() textInput: TextMedia | null = null;
  @Output() textOutput = new EventEmitter<MediaItem>();

  ngOnInit(): void {
    if (!this.textInput) {
      this.textInput = {
        id: crypto.randomUUID(),
        type: MediaType.TEXT,
        content: ""
      }
    }
  }
  editorStyle = {
    height: '300px',
    backgroundColor: '#ffffff'
  }
  
  addText() {
    if (!this.textInput) return;
    const newLatex: TextMedia = {
      ...this.textInput,
      id: crypto.randomUUID()
    };
    this.textOutput.emit(newLatex);
  }
}
