import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from '../../file-picker/file-picker.component';
import { FileLinkSelectorComponent } from "../../file-link-selector/file-link-selector.component";
import { MediaItem, VideoMedia } from 'shared/src/core/media-models';
import { demoMedias, MediaType } from '@quiznest/auth';
import { MediaSearchResultComponent } from "../../../cards/media-search-result/media-search-result.component";

@Component({
  selector: 'app-media-select-video',
  imports: [CommonModule, FilePickerComponent, FileLinkSelectorComponent, MediaSearchResultComponent],
  templateUrl: './media-select-video.component.html',
  styleUrl: './media-select-video.component.css',
  standalone: true
})
export class MediaSelectVideoComponent {
  MediaType = MediaType;
  @Output() filesSelected = new EventEmitter<MediaItem>();

  preloadedVideos: VideoMedia[] = []

  ngOnInit(): void {
    this.preloadedVideos = demoMedias.videos as VideoMedia[];
  }
  selectVideo(media: MediaItem) {
    this.filesSelected.emit(media);
  }
  selectExistingVideo(media: VideoMedia){
    media.id = crypto.randomUUID();
    this.filesSelected.emit(media);
  }
}
