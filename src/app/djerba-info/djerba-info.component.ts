import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-djerba-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './djerba-info.component.html',
  styleUrls: ['./djerba-info.component.css']
})
export class DjerbaInfoComponent implements OnInit, OnDestroy {
  title = 'معلومات عن جربة ومركز إليف';

  // --- Static Djerba Image ---
  djerbaStaticImage = 'assets/djerba/1.jpg'; // CHANGE THIS

  // --- Elif Center Carousel Logic ---
  numVisible = 3; // Show 3 images at a time
  private elifInterval: any;
  private scrollSpeed = 2000; // 2 seconds per slide
  currentElifIndex = 0;
  isElifTransitioning = false;
  elifImages = [
    'assets/elif-center/1.jpg', 'assets/elif-center/2.jpg',
    'assets/elif-center/3.jpg', 'assets/elif-center/4.jpg',
    'assets/elif-center/5.jpg', 'assets/elif-center/6.jpg',
    'assets/elif-center/7.jpg', 'assets/elif-center/8.jpg',
    'assets/elif-center/9.jpg', 'assets/elif-center/10.jpg',
    'assets/elif-center/11.jpg', 'assets/elif-center/12.jpg',
    'assets/elif-center/13.jpg', 'assets/elif-center/14.jpg',
    'assets/elif-center/15.jpg', 'assets/elif-center/16.jpg',
    'assets/elif-center/17.jpg'
  ];
  clonedElifImages: string[] = []; // Re-added for seamless loop

  // --- Modal State ---
  isModalOpen = false;
  modalImageUrl: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Clone Elif images for seamless loop
    if (this.elifImages.length > this.numVisible) {
      this.clonedElifImages = this.elifImages.slice(0, this.numVisible);
    }
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  // --- Auto-Scroll Controls (Elif Only) ---
  startAutoScroll(): void {
    if (!this.elifInterval && this.elifImages.length > this.numVisible) {
      this.elifInterval = setInterval(() => this.nextElif(), this.scrollSpeed);
    }
  }

  stopAutoScroll(): void {
    clearInterval(this.elifInterval);
    this.elifInterval = null;
  }

  goBack(): void {
    this.router.navigate(['/documents']);
  }

  // --- Elif Methods (Updated for Seamless Loop) ---
  nextElif(): void {
    if (this.isElifTransitioning) return;
    this.currentElifIndex++;
  }

  prevElif(): void {
    if (this.isElifTransitioning || this.currentElifIndex === 0) return;
    this.currentElifIndex--;
  }

  onElifTransitionEnd(): void {
    if (this.currentElifIndex === this.elifImages.length) {
      this.isElifTransitioning = true;
      this.currentElifIndex = 0;
      setTimeout(() => { this.isElifTransitioning = false; }, 50);
    }
  }

  // --- Modal Methods ---
  openModal(imageUrl: string): void {
    this.stopAutoScroll(); // Pause Elif carousel when modal opens
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
        this.modalImageUrl = null;
        this.startAutoScroll(); // Resume Elif carousel after modal closes
     }, 300);
  }

  // --- Getters (Elif Only, Updated for Seamless Loop) ---
  get elifTransform(): string {
    const slideAmount = 100 / this.numVisible;
    return `translateX(${ -this.currentElifIndex * slideAmount }%)`;
  }
  get elifTransition(): string {
    return this.isElifTransitioning ? 'none' : 'transform 0.5s ease-in-out';
  }
}