import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from '../../file-picker/file-picker.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MediaItem, MediaType, YouTubeMedia } from 'shared/src/core/media-models';
import { QuizHelperService } from '../../../../quiz-helper-service';

@Component({
  selector: 'app-media-select-youtube',
  imports: [CommonModule, FormsModule],
  templateUrl: './media-select-youtube.component.html',
  styleUrl: './media-select-youtube.component.css',
  standalone: true
})
export class MediaSelectYoutubeComponent {
  @Output() filesSelected = new EventEmitter<MediaItem>();
  youtubeUrl: string = '';
  sanitizedEmbedUrl: SafeResourceUrl | null = null;
  autoplay = false;
  controls = true;
  loop = false;

  isValidMedia = false;

  constructor(private quizHelperService:QuizHelperService) {}

  updateEmbedUrl(): void {
    const videoId = this.quizHelperService.extractYoutubeVideoId(this.youtubeUrl);
    if (!videoId) {
      this.sanitizedEmbedUrl = null;
      this.isValidMedia = false;
      return;
    }

    this.isValidMedia = true;

    const params = new URLSearchParams();
    if (this.autoplay) params.set('autoplay', '1');
    if (!this.controls) params.set('controls', '0');
    if (this.loop) {
      params.set('loop', '1');
      params.set('playlist', videoId);
    }

    const url = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    this.sanitizedEmbedUrl = this.quizHelperService.getSafeUrlForYoutube(url);
  }

  selectYoutbeVideo() {
    if (!this.isValidMedia) return;

    const videoId = this.quizHelperService.extractYoutubeVideoId(this.youtubeUrl);
    if (!videoId) return;

    const media: YouTubeMedia = {
      id: crypto.randomUUID(),
      type: MediaType.YOUTUBE,
      videoId,
      url: this.youtubeUrl,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/0.jpg`,
      settings: {
        autoplay: this.autoplay,
        controls: this.controls,
        loop: this.loop
      }
    };

    this.filesSelected.emit(media);
  }
}
