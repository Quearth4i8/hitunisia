import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  title = 'تخطيط الحدث والبرنامج';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/documents']);
  }
}