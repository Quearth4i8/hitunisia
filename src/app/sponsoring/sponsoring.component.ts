import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsoring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsoring.component.html',
  styleUrls: ['./sponsoring.component.css']
})
export class SponsoringComponent {
  title = 'وثيقة الرعاية';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/documents']);
  }
}