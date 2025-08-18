import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/home-components/navbar/navbar.component';
import { SidebarComponent } from '../components/home-components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { MathfieldElement } from 'mathlive';

@Component({
  imports: [NavbarComponent, SidebarComponent, RouterModule,FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'admin-panel';
  constructor() {
    // ✅ Set the sounds directory before math fields are rendered
    MathfieldElement.soundsDirectory =
      'https://cdn.jsdelivr.net/npm/mathlive@0.106.0/sounds';
  }
}