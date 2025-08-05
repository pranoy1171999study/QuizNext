import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from "../components/left-sidebar/left-sidebar.component";
import { RightSidebarComponent } from "../components/right-sidebar/right-sidebar.component";
import { MiddlePanelComponent } from "../components/middle-panel/middle-panel.component";

@Component({
  selector: 'app-quiz-home',
  imports: [CommonModule, LeftSidebarComponent, RightSidebarComponent, MiddlePanelComponent],
  templateUrl: './quiz-home.component.html',
  styleUrl: './quiz-home.component.css',
  standalone:true
})
export class QuizHomeComponent {
  isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

}
