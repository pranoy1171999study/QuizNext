import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelSelectComponent } from "./components/channel-select/channel-select.component";
import { ChannelCreateViewEditComponent } from "./components/channel-create-view-edit/channel-create-view-edit.component";
import { Channel } from '@quiznest/auth';

@Component({
  selector: 'app-channel-home',
  imports: [CommonModule, ChannelSelectComponent, ChannelCreateViewEditComponent],
  templateUrl: './channel-home.component.html',
  styleUrl: './channel-home.component.css',
  standalone: true
})
export class ChannelHomeComponent {
  channelData: Channel | null = null;

  createRequest() {
    this.channelData = null;
  }
  viewRequest(channel: Channel) {
    this.channelData = channel;
  }
}
