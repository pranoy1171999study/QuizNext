import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseMedia, ImageMedia, MediaItem, MediaType, VideoMedia } from 'shared/src/core/media-models';

@Component({
  selector: 'app-file-link-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './file-link-selector.component.html',
  styleUrl: './file-link-selector.component.css',
})
export class FileLinkSelectorComponent {
  MediaType = MediaType;
  @Input() mediaType: MediaType | null = null;
  @Output() linkSelected = new EventEmitter<MediaItem>();
  fileUrl: string = '';

  get isValidMedia(): boolean {
    return this.isValidUrl(this.fileUrl) && this.mediaType !== null;
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  handleAdd(): void {
    if (this.isValidMedia) {
      if(this.mediaType === MediaType.IMAGE){
         this.linkSelected.emit({
          id: crypto.randomUUID(),
          name: "sample name",
          type: MediaType.IMAGE,
          url: this.fileUrl,
          altText: "alt text"
         } as ImageMedia)
      }
      else{
        this.linkSelected.emit({
          id: crypto.randomUUID(),
          name: "sample name",
          type: MediaType.VIDEO,
          url: this.fileUrl,
          thumbnailUrl: "thumbnail url"
         } as VideoMedia)
      }
    }
  }
}
