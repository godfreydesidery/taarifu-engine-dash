import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer bg-light border-top">
      <div class="container-fluid">
        <div class="row align-items-center py-3">
          <div class="col-md-6">
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt-fill text-primary me-2"></i>
              <span class="text-muted">
                &copy; {{ currentYear }} Taarifu Engine Dashboard. All rights reserved.
              </span>
            </div>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="d-flex justify-content-md-end justify-content-start align-items-center">
              <span class="text-muted me-3">Version 1.0.0</span>
              <div class="d-flex">
                <a href="#" class="text-muted me-3" (click)="openHelp()" title="Help">
                  <i class="bi bi-question-circle"></i>
                </a>
                <a href="#" class="text-muted me-3" (click)="openSupport()" title="Support">
                  <i class="bi bi-headset"></i>
                </a>
                <a href="#" class="text-muted" (click)="openAbout()" title="About">
                  <i class="bi bi-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: auto;
      background-color: #f8f9fa !important;
      border-top: 1px solid #dee2e6 !important;
    }

    .footer a {
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer a:hover {
      color: #007bff !important;
    }

    .footer .bi {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .footer .row {
        text-align: center;
      }
      
      .footer .col-md-6:first-child {
        margin-bottom: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  openHelp() {
    console.log('Open help');
    // Implement help functionality
  }

  openSupport() {
    console.log('Open support');
    // Implement support functionality
  }

  openAbout() {
    console.log('Open about');
    // Implement about functionality
  }
}
