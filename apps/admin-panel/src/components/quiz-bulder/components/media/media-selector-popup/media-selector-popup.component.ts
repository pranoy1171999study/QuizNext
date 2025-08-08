import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MediaType } from '@quiznest/auth';
import { MediaSelectImageComponent } from "../media-select-pages/media-select-image/media-select-image.component";
import { MediaSelectVideoComponent } from "../media-select-pages/media-select-video/media-select-video.component";
import { MediaSelectYoutubeComponent } from "../media-select-pages/media-select-youtube/media-select-youtube.component";
import { MediaSelectLatexComponent } from "../media-select-pages/media-select-latex/media-select-latex.component";
import { LatexMedia, MediaItem, TextMedia } from 'shared/src/core/media-models';
import { MediaSelectTextComponent } from "../media-select-pages/media-select-text/media-select-text.component";

@Component({
  selector: 'app-media-selector-popup',
  standalone: true,
  imports: [CommonModule, MediaSelectImageComponent, MediaSelectVideoComponent, MediaSelectYoutubeComponent, MediaSelectLatexComponent, MediaSelectTextComponent],
  templateUrl: './media-selector-popup.component.html',
  styleUrls: ['./media-selector-popup.component.css']
})
export class MediaSelectorPopupComponent {
  MediaType = MediaType;
  isSidebarOpen = true;
  selectedMediaType: MediaType = MediaType.IMAGE;
  selectedMedia: any = null;



  constructor(
    public dialogRef: MatDialogRef<MediaSelectorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      mediaList: { type: 'image' | 'video'; url: string; id: string }[]
      mediaElement:MediaItem|null
    }
  ) { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  selectMedia(media: any) {
    this.selectedMedia = media;
  }

  confirmSelection() {
    this.dialogRef.close({ reason: 'selected', data: this.selectedMedia });
  }

  cancel() {
    this.dialogRef.close({ reason: 'closed' });
  }
  emitSelectedMedia(media: any){
    this.dialogRef.close(media);
  }

  getLatexMedia():LatexMedia{
    return this.data.mediaElement as LatexMedia;
  }
  getTextMedia():TextMedia{
    return this.data.mediaElement as TextMedia;
  }

}
