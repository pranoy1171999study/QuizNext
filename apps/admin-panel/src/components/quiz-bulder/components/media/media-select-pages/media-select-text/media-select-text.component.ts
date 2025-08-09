import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItem, TextMedia } from 'shared/src/core/media-models';
import { FormsModule } from '@angular/forms';
import { MediaType } from '@quiznest/auth';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-media-select-text',
  imports: [CommonModule,  FormsModule, AngularEditorModule],
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
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '400px',
    minHeight: '400px',
    maxHeight:'400px',
    placeholder: 'Type here...',
    translate: 'no',
    toolbarHiddenButtons: [
      ['insertImage', 'insertVideo', 'insertHtml'], // hide media tools
    ]
  };
  
  addText() {
    if (!this.textInput) return;
    const newLatex: TextMedia = {
      ...this.textInput,
      id: crypto.randomUUID()
    };
    this.textOutput.emit(newLatex);
  }
}
