// src/app/certificates/certificates.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate, CERTIFICATES_DATA } from './certificates.data'; // Import data

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  title = 'شهادة مشاركة';
  participantId: string | null = null;
  certificate: Certificate | undefined = undefined; // Will hold the data object including image path

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.participantId = params.get('id'); // Get ID from URL (/documents/certificates/:id)
      if (this.participantId) {
        // Find the certificate data matching the ID
        this.certificate = CERTIFICATES_DATA.find(cert => cert.id === this.participantId);
        if (!this.certificate) {
          console.error(`Certificate data not found for ID: ${this.participantId}`);
          this.title = "خطأ - الشهادة غير موجودة"; // Error title
        } else {
          // Use participant name in title if available
          this.title = `شهادة مشاركة - ${this.certificate.participantName || 'المشارك'}`;
        }
      } else {
        // If no ID in URL (/documents/certificates)
        this.title = "شهادات المشاركة"; // General page title
      }
    });
  }

  goBack(): void {
    // Navigate back to the main documents page
    this.router.navigate(['/documents']);
  }

  downloadCertificate(): void {
    if (!this.certificate || !this.certificate.certificateImagePath) {
      return;
    }

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = this.certificate.certificateImagePath;
    link.download = `شهادة_${this.certificate.participantName || 'مشارك'}.png`;

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}