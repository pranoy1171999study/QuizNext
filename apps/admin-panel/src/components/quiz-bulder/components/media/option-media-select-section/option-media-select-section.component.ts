import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaViewerComponent } from "../media-viewer/media-viewer.component";
import { BaseMedia, MediaItem } from 'shared/src/core/media-models';
import { MediaType } from '@quiznest/auth';
import { MediaSelectorPopupComponent } from '../media-selector-popup/media-selector-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { QuizBuilderService } from '../../../quiz-builder-service';
import { QuizHelperService } from '../../../quiz-helper-service';

@Component({
  selector: 'app-option-media-select-section',
  imports: [CommonModule, MediaViewerComponent],
  templateUrl: './option-media-select-section.component.html',
  styleUrl: './option-media-select-section.component.css',
  standalone: true
})
export class OptionMediaSelectSectionComponent {
  @Input() media: MediaItem | null = null;
  @Output() mediaChange = new EventEmitter<MediaItem | null>();

  constructor(private dialog: MatDialog, public quizBulderService: QuizBuilderService, public quizHelperService: QuizHelperService) {

  }

  openMediaSelectorBaseMedia(media: BaseMedia | null | undefined) {
    if (media && (media?.type === MediaType.LATEX || media?.type === MediaType.TEXT)) {
      this.openMediaSelector(this.quizHelperService.getOriginalMediaFormat(media));
    } else {
      this.openMediaSelector(null);
    }
  }
  openMediaSelector(media: MediaItem | null) {
    const dialogRef = this.dialog.open(MediaSelectorPopupComponent, {
      data: {
        mediaElement: media,
        allowedMedia: [MediaType.IMAGE,MediaType.LATEX,MediaType.TEXT]
      },
      maxWidth: 'none',
      panelClass: 'media-dialog-size'
    });

    dialogRef.afterClosed().subscribe((media: MediaItem | null) => {
      if (media) {
        this.media = media;
        this.mediaChange.emit(media);
      }
    });
  }
}
