import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthComponent } from '@quiznest/auth';
import { NavbarComponent } from '../components/home-components/navbar/navbar.component';
import { SidebarComponent } from '../components/home-components/sidebar/sidebar.component';
import { QuizHomeComponent } from "../components/quiz-bulder/quiz-home/quiz-home.component";
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NavbarComponent, SidebarComponent, RouterModule, AuthComponent, QuizHomeComponent,FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'admin-panel';
}