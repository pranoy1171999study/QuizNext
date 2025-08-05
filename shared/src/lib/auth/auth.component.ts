import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'lib-auth',
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  ngOnInit(): void {
    alert('AuthComponent loaded!');
  }
}
