import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MediaSelectorPopupComponent } from '../media-selector-popup/media-selector-popup.component';
import { QuizBuilderService } from '../../../quiz-builder-service';
import { QuizHelperService } from '../../../quiz-helper-service';
import { MediaItem, MediaType } from 'shared/src/core/media-models';
import { MediaViewerComponent } from "../media-viewer/media-viewer.component";

@Component({
  selector: 'app-main-media-select-section',
  imports: [CommonModule, MediaSelectorPopupComponent, MediaViewerComponent],
  templateUrl: './main-media-select-section.component.html',
  styleUrl: './main-media-select-section.component.css',
  standalone: true
})
export class MainMediaSelectSectionComponent {

  constructor(private dialog: MatDialog,public quizBulderService:QuizBuilderService,public quizHelperService:QuizHelperService){

  }

  openMediaSelector() {
    const dialogRef = this.dialog.open(MediaSelectorPopupComponent, {
      data: { 
        mediaElement: this.getPreExistMedia()
      },
      maxWidth: 'none',
      panelClass: 'media-dialog-size'
    });

    dialogRef.afterClosed().subscribe(media => {
      if(media){
        const selectedQuestion = this.quizHelperService.getOriginalQuestionFormat(this.quizBulderService.getSelectedQuestion());
        if(selectedQuestion){
          selectedQuestion.media = media;
        }
      }
    });
  }
  getPreExistMedia():MediaItem|null{
    //If latex send it else null
    const selectedQuestion = this.quizBulderService.getSelectedQuestion();
    
    if(selectedQuestion){
      const media = this.quizHelperService.getOriginalQuestionFormat(selectedQuestion)?.media;
      if(media && media.type === MediaType.LATEX){
        return media as MediaItem;
      }
    }
    return null;
  }
}
