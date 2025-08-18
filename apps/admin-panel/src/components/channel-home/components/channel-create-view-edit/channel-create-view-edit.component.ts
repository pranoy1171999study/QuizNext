import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Channel } from '@quiznest/auth'
import { FormsModule } from '@angular/forms';
import { ChannelViewComponent } from "./channel-view/channel-view.component";

export enum Action {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}
@Component({
  selector: 'app-channel-create-view-edit',
  imports: [CommonModule, FormsModule, ChannelViewComponent],
  templateUrl: './channel-create-view-edit.component.html',
  styleUrl: './channel-create-view-edit.component.css',
  standalone: true
})
export class ChannelCreateViewEditComponent {
  @Input()
  set channelData(value: Channel | null) {
    this.channel_data = value;
    this.decideMode();
  }
  Action = Action;

  channel_data: Channel | null = null;
  mode: Action = Action.CREATE;

  private decideMode() {
    if (!this.channel_data) {
      this.mode = Action.CREATE;
    } else if (this.mode === Action.EDIT) {
      this.mode = Action.EDIT;
    } else {
      this.mode = Action.VIEW;
    }
  }

}
