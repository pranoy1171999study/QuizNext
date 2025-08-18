import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action } from '../channel-create-view-edit/channel-create-view-edit.component';
import { Channel } from '@quiznest/auth';

@Component({
  selector: 'app-channel-select',
  imports: [CommonModule],
  templateUrl: './channel-select.component.html',
  styleUrl: './channel-select.component.css',
  standalone: true
})
export class ChannelSelectComponent {
  @Output() create = new EventEmitter<void>();
  @Output() view = new EventEmitter<Channel>();

  channels: Channel[] = [
    {
      id: 'c1cfc5b1-1e7b-44f3-b1c1-456d1d2d7e91',
      userId: 'u101',
      name: 'Tech Zone',
      description: 'Latest insights and reviews on technology.',
      handle: 'techzone',
      profilePictureUrl: 'https://placehold.co/100x100?text=TZ',
      coverImageUrl: 'https://placehold.co/600x200?text=Tech+Cover',
      keywords: ['technology', 'gadgets', 'reviews'],
      subscriberCount: 24500,
      quizCount: 320,
      viewCount: 1450000,
      isVerified: true,
      isActive: true,
      metadata: { category: 'Technology' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'd2c8f6d1-5b11-4e2e-b9f3-9a8230a7812d',
      userId: 'u102',
      name: 'Gaming Hub',
      description: 'Your daily dose of gaming streams and news.',
      handle: 'gaminghub',
      profilePictureUrl: 'https://placehold.co/100x100?text=GH',
      coverImageUrl: 'https://placehold.co/600x200?text=Gaming+Cover',
      keywords: ['gaming', 'esports', 'streams'],
      subscriberCount: 67000,
      quizCount: 580,
      viewCount: 8500000,
      isVerified: true,
      isActive: true,
      metadata: { category: 'Gaming' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'a32f8c7e-b3d6-4211-91df-97fd7a74d89a',
      userId: 'u103',
      name: 'Music Vibes',
      description: 'Fresh tracks, playlists, and live sessions.',
      handle: 'musicvibes',
      profilePictureUrl: 'https://placehold.co/100x100?text=MV',
      coverImageUrl: 'https://placehold.co/600x200?text=Music+Cover',
      keywords: ['music', 'songs', 'playlists'],
      subscriberCount: 120000,
      quizCount: 1040,
      viewCount: 25000000,
      isVerified: true,
      isActive: true,
      metadata: { category: 'Music' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'b12ac24f-34a9-4017-81b1-1d4a62de04c3',
      userId: 'u104',
      name: 'News Daily',
      description: 'Breaking news and top stories around the world.',
      handle: 'newsdaily',
      profilePictureUrl: 'https://placehold.co/100x100?text=ND',
      coverImageUrl: 'https://placehold.co/600x200?text=News+Cover',
      keywords: ['news', 'world', 'daily'],
      subscriberCount: 340000,
      quizCount: 4300,
      viewCount: 88000000,
      isVerified: true,
      isActive: true,
      metadata: { category: 'News' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];


  selectedChannelId: string | null = null;

  selectChannel(channel:Channel) {
    this.selectedChannelId = channel.id;
    this.emitViewChannel(channel);
  }
  emitViewChannel(channel:Channel){
    this.view.emit(channel);
  }
  emitCreateChannel(){
    this.create.emit();
  }
}
