import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  title = 'وثيقة المنتدى';
  forumImagePath = 'assets/documents/forum1.jpg';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/documents']);
  }
}