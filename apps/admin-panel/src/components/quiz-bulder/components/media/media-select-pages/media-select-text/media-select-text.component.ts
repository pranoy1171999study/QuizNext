import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItem, HtmlMedia } from 'shared/src/core/media-models';
import { FormsModule } from '@angular/forms';
import { MediaType } from '@quiznest/auth';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { generateRandomUUID } from 'apps/admin-panel/src/services/utils';

@Component({
  selector: 'app-media-select-text',
  imports: [CommonModule,  FormsModule, AngularEditorModule],
  templateUrl: './media-select-text.component.html',
  styleUrl: './media-select-text.component.css',
  standalone: true,
})
export class MediaSelectTextComponent implements OnInit {
  @Input() textInput: HtmlMedia | null = null;
  @Output() textOutput = new EventEmitter<MediaItem>();

  ngOnInit(): void {
    if (!this.textInput) {
      this.textInput = {
        id: generateRandomUUID(),
        type: MediaType.HTML,
        content: ""
      }
    }
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    sanitize: false,//Otherwise it will remove the css
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
    const newLatex: HtmlMedia = {
      ...this.textInput,
      id: generateRandomUUID()
    };
    this.textOutput.emit(newLatex);
  }
}
