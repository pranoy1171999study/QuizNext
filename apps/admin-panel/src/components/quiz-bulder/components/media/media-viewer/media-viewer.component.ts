import { Component, Input, OnInit, OnChanges, SimpleChanges, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMedia, MediaItem, MediaType } from 'shared/src/core/media-models';
import { QuizHelperService } from '../../../quiz-helper-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-viewer',
  standalone: true,
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './media-viewer.component.html',
  styleUrl: './media-viewer.component.css'
})
export class MediaViewerComponent implements OnInit, OnChanges {
  MediaType = MediaType;

  @Input() inputMedia: BaseMedia | null = null;
  media: MediaItem | null = null;

  constructor(private quizHelperService: QuizHelperService) {}

  ngOnInit(): void {
    this.updateMedia();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputMedia']) {
      this.updateMedia();
    }
  }

  private updateMedia() {
    if (this.inputMedia) {
      this.media = this.quizHelperService.getOriginalMediaFormat(this.inputMedia);
      if(this.media?.type === MediaType.YOUTUBE){
        this.getSafeUrl(this.media?.url);
      }
    } else {
      this.media = null;
    }
  }
  safeUrl:SafeResourceUrl|null = null;
  getSafeUrl(url:string):SafeResourceUrl{
    this.safeUrl = this.quizHelperService.getSafeUrlForYoutube(url);
    return this.safeUrl;
  }
}
