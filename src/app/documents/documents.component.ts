import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  title = 'الوثائق';
  hasChildRoute = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkChildRoute();
    this.router.events.subscribe(() => {
      this.checkChildRoute();
    });
  }

  private checkChildRoute() {
    this.hasChildRoute = this.router.url !== '/documents';
  }
}
