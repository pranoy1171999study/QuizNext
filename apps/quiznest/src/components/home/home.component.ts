import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryroomComponent } from '../entryroom/entryroom.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,EntryroomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true
})
export class HomeComponent {}
