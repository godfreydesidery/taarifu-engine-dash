import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { PoliticalPartyService } from '../../../core/services/political-party.service';
import { ToastService } from '../../../core/services/toast.service';
import { CreatePoliticalPartyRequest, UpdatePoliticalPartyRequest } from '../../../core/models/political-party.model';

@Component({
  selector: 'app-political-party-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-flag me-2"></i>
                {{ isEditMode ? 'Edit Political Party' : 'Create New Political Party' }}
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="politicalPartyForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <!-- Basic Information -->
                  <div class="col-12">
                    <h6 class="text-primary border-bottom pb-2">Basic Information</h6>
                  </div>

                  <!-- Name -->
                  <div class="col-md-6">
                    <label for="name" class="form-label">Party Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      formControlName="name"
                      placeholder="Enter political party name"
                      [class.is-invalid]="politicalPartyForm.get('name')?.invalid && politicalPartyForm.get('name')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('name')?.hasError('required')">
                      Party name is required
                    </div>
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('name')?.hasError('minlength')">
                      Party name must be at least 2 characters
                    </div>
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('name')?.hasError('maxlength')">
                      Party name must not exceed 200 characters
                    </div>
                  </div>

                  <!-- Abbreviation -->
                  <div class="col-md-6">
                    <label for="abbreviation" class="form-label">Abbreviation <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="abbreviation"
                      formControlName="abbreviation"
                      placeholder="Enter party abbreviation"
                      [class.is-invalid]="politicalPartyForm.get('abbreviation')?.invalid && politicalPartyForm.get('abbreviation')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('abbreviation')?.hasError('required')">
                      Abbreviation is required
                    </div>
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('abbreviation')?.hasError('minlength')">
                      Abbreviation must be at least 2 characters
                    </div>
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('abbreviation')?.hasError('maxlength')">
                      Abbreviation must not exceed 20 characters
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="col-12">
                    <label for="description" class="form-label">Description</label>
                    <textarea 
                      class="form-control" 
                      id="description"
                      formControlName="description"
                      rows="3"
                      placeholder="Enter party description"
                      [class.is-invalid]="politicalPartyForm.get('description')?.invalid && politicalPartyForm.get('description')?.touched">
                    </textarea>
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('description')?.hasError('maxlength')">
                      Description must not exceed 2000 characters
                    </div>
                  </div>

                  <!-- Party Details -->
                  <div class="col-12 mt-4">
                    <h6 class="text-primary border-bottom pb-2">Party Details</h6>
                  </div>

                  <!-- Founding Date -->
                  <div class="col-md-6">
                    <label for="foundingDate" class="form-label">Founding Date</label>
                    <input 
                      type="date" 
                      class="form-control" 
                      id="foundingDate"
                      formControlName="foundingDate">
                  </div>

                  <!-- Founding Location -->
                  <div class="col-md-6">
                    <label for="foundingLocation" class="form-label">Founding Location</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="foundingLocation"
                      formControlName="foundingLocation"
                      placeholder="Enter founding location"
                      [class.is-invalid]="politicalPartyForm.get('foundingLocation')?.invalid && politicalPartyForm.get('foundingLocation')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('foundingLocation')?.hasError('maxlength')">
                      Founding location must not exceed 200 characters
                    </div>
                  </div>

                  <!-- Ideology -->
                  <div class="col-md-6">
                    <label for="ideology" class="form-label">Ideology</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="ideology"
                      formControlName="ideology"
                      placeholder="Enter political ideology"
                      [class.is-invalid]="politicalPartyForm.get('ideology')?.invalid && politicalPartyForm.get('ideology')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('ideology')?.hasError('maxlength')">
                      Ideology must not exceed 500 characters
                    </div>
                  </div>

                  <!-- Colors -->
                  <div class="col-md-6">
                    <label for="colors" class="form-label">Party Colors</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="colors"
                      formControlName="colors"
                      placeholder="e.g., Red, White, Blue"
                      [class.is-invalid]="politicalPartyForm.get('colors')?.invalid && politicalPartyForm.get('colors')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('colors')?.hasError('maxlength')">
                      Colors must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Symbol -->
                  <div class="col-md-6">
                    <label for="symbol" class="form-label">Party Symbol</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="symbol"
                      formControlName="symbol"
                      placeholder="Enter party symbol"
                      [class.is-invalid]="politicalPartyForm.get('symbol')?.invalid && politicalPartyForm.get('symbol')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('symbol')?.hasError('maxlength')">
                      Symbol must not exceed 200 characters
                    </div>
                  </div>

                  <!-- Motto -->
                  <div class="col-md-6">
                    <label for="motto" class="form-label">Party Motto</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="motto"
                      formControlName="motto"
                      placeholder="Enter party motto"
                      [class.is-invalid]="politicalPartyForm.get('motto')?.invalid && politicalPartyForm.get('motto')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('motto')?.hasError('maxlength')">
                      Motto must not exceed 300 characters
                    </div>
                  </div>

                  <!-- Contact Information -->
                  <div class="col-12 mt-4">
                    <h6 class="text-primary border-bottom pb-2">Contact Information</h6>
                  </div>

                  <!-- Website URL -->
                  <div class="col-md-6">
                    <label for="websiteUrl" class="form-label">Website URL</label>
                    <input 
                      type="url" 
                      class="form-control" 
                      id="websiteUrl"
                      formControlName="websiteUrl"
                      placeholder="https://example.com"
                      [class.is-invalid]="politicalPartyForm.get('websiteUrl')?.invalid && politicalPartyForm.get('websiteUrl')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('websiteUrl')?.hasError('maxlength')">
                      Website URL must not exceed 500 characters
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email"
                      formControlName="email"
                      placeholder="contact@party.com"
                      [class.is-invalid]="politicalPartyForm.get('email')?.invalid && politicalPartyForm.get('email')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('email')?.hasError('maxlength')">
                      Email must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="col-md-6">
                    <label for="phone" class="form-label">Phone</label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      id="phone"
                      formControlName="phone"
                      placeholder="Enter phone number"
                      [class.is-invalid]="politicalPartyForm.get('phone')?.invalid && politicalPartyForm.get('phone')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('phone')?.hasError('maxlength')">
                      Phone must not exceed 20 characters
                    </div>
                  </div>

                  <!-- Headquarters Address -->
                  <div class="col-md-6">
                    <label for="headquartersAddress" class="form-label">Headquarters Address</label>
                    <textarea 
                      class="form-control" 
                      id="headquartersAddress"
                      formControlName="headquartersAddress"
                      rows="2"
                      placeholder="Enter headquarters address"
                      [class.is-invalid]="politicalPartyForm.get('headquartersAddress')?.invalid && politicalPartyForm.get('headquartersAddress')?.touched">
                    </textarea>
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('headquartersAddress')?.hasError('maxlength')">
                      Headquarters address must not exceed 500 characters
                    </div>
                  </div>

                  <!-- Registration Information -->
                  <div class="col-12 mt-4">
                    <h6 class="text-primary border-bottom pb-2">Registration Information</h6>
                  </div>

                  <!-- Registration Number -->
                  <div class="col-md-6">
                    <label for="registrationNumber" class="form-label">Registration Number</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="registrationNumber"
                      formControlName="registrationNumber"
                      placeholder="Enter registration number"
                      [class.is-invalid]="politicalPartyForm.get('registrationNumber')?.invalid && politicalPartyForm.get('registrationNumber')?.touched">
                    <div class="invalid-feedback" *ngIf="politicalPartyForm.get('registrationNumber')?.hasError('maxlength')">
                      Registration number must not exceed 50 characters
                    </div>
                  </div>

                  <!-- Registration Date -->
                  <div class="col-md-6">
                    <label for="registrationDate" class="form-label">Registration Date</label>
                    <input 
                      type="date" 
                      class="form-control" 
                      id="registrationDate"
                      formControlName="registrationDate">
                  </div>

                  <!-- Member Count -->
                  <div class="col-md-6">
                    <label for="memberCount" class="form-label">Member Count</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="memberCount"
                      formControlName="memberCount"
                      placeholder="Enter member count"
                      min="0">
                  </div>

                  <!-- Status Options -->
                  <div class="col-md-6">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="isRegistered"
                        formControlName="isRegistered">
                      <label class="form-check-label" for="isRegistered">
                        Registered Party
                      </label>
                    </div>
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="isActive"
                        formControlName="isActive">
                      <label class="form-check-label" for="isActive">
                        Active Party
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Form Actions -->
                <div class="row mt-4">
                  <div class="col-12">
                    <div class="d-flex gap-2">
                      <button 
                        type="submit" 
                        class="btn btn-primary"
                        [disabled]="politicalPartyForm.invalid || isSubmitting">
                        <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                        <i *ngIf="!isSubmitting" class="bi bi-check-lg me-1"></i>
                        {{ isEditMode ? 'Update Political Party' : 'Create Political Party' }}
                      </button>
                      <button 
                        type="button" 
                        class="btn btn-outline-secondary"
                        (click)="onCancel()">
                        <i class="bi bi-x-lg me-1"></i>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-info-circle me-2"></i>
                Guidelines
              </h5>
            </div>
            <div class="card-body">
              <h6>Creating a Political Party</h6>
              <ul class="list-unstyled">
                <li><i class="bi bi-check-circle text-success me-2"></i>Provide a unique party name and abbreviation</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Include founding date and location</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Specify political ideology and colors</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Add contact information and headquarters</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Include registration details if applicable</li>
              </ul>
              
              <hr>
              
              <h6>Party Status</h6>
              <ul class="list-unstyled">
                <li><span class="badge bg-success me-2">Active</span> Party is currently operational</li>
                <li><span class="badge bg-primary me-2">Registered</span> Party is officially registered</li>
                <li><span class="badge bg-warning me-2">Unregistered</span> Party is not officially registered</li>
                <li><span class="badge bg-secondary me-2">Inactive</span> Party is not currently active</li>
              </ul>

              <hr>

              <h6>Required Fields</h6>
              <ul class="list-unstyled">
                <li><i class="bi bi-asterisk text-danger me-2"></i>Party Name</li>
                <li><i class="bi bi-asterisk text-danger me-2"></i>Abbreviation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-check-input:checked {
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
    .border-bottom {
      border-bottom: 2px solid #dee2e6 !important;
    }
  `]
})
export class PoliticalPartyFormComponent implements OnInit {
  politicalPartyForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  politicalPartyId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private politicalPartyService: PoliticalPartyService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.politicalPartyForm = this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.politicalPartyId = params['uid'];
      if (this.politicalPartyId) {
        this.isEditMode = true;
        this.loadPoliticalParty();
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      abbreviation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(2000)]],
      foundingDate: [''],
      foundingLocation: ['', [Validators.maxLength(200)]],
      ideology: ['', [Validators.maxLength(500)]],
      colors: ['', [Validators.maxLength(100)]],
      symbol: ['', [Validators.maxLength(200)]],
      motto: ['', [Validators.maxLength(300)]],
      websiteUrl: ['', [Validators.maxLength(500)]],
      email: ['', [Validators.maxLength(100)]],
      phone: ['', [Validators.maxLength(20)]],
      headquartersAddress: ['', [Validators.maxLength(500)]],
      isRegistered: [true],
      isActive: [true],
      registrationNumber: ['', [Validators.maxLength(50)]],
      registrationDate: [''],
      memberCount: [null]
    });
  }

  private loadPoliticalParty() {
    if (!this.politicalPartyId) return;

    this.politicalPartyService.getPoliticalPartyByUid(this.politicalPartyId).subscribe({
      next: (response) => {
        if (response.status) {
          const party = response.data;
          this.politicalPartyForm.patchValue({
            name: party.name,
            abbreviation: party.abbreviation,
            description: party.description,
            foundingDate: party.foundingDate ? party.foundingDate.split('T')[0] : '',
            foundingLocation: party.foundingLocation,
            ideology: party.ideology,
            colors: party.colors,
            symbol: party.symbol,
            motto: party.motto,
            websiteUrl: party.websiteUrl,
            email: party.email,
            phone: party.phone,
            headquartersAddress: party.headquartersAddress,
            isRegistered: party.isRegistered,
            isActive: party.isActive,
            registrationNumber: party.registrationNumber,
            registrationDate: party.registrationDate ? party.registrationDate.split('T')[0] : '',
            memberCount: party.memberCount
          });
        } else {
          this.toastService.error('Error', 'Failed to load political party');
          this.router.navigate(['/political-parties']);
        }
      },
      error: (error) => {
        console.error('Error loading political party:', error);
        this.toastService.error('Error', 'Failed to load political party. Please try again.');
        this.router.navigate(['/political-parties']);
      }
    });
  }

  onSubmit() {
    if (this.politicalPartyForm.valid) {
      this.isSubmitting = true;
      const formData = this.politicalPartyForm.value;

      if (this.isEditMode && this.politicalPartyId) {
        const updateRequest: UpdatePoliticalPartyRequest = {
          name: formData.name,
          abbreviation: formData.abbreviation,
          description: formData.description,
          foundingDate: formData.foundingDate,
          foundingLocation: formData.foundingLocation,
          ideology: formData.ideology,
          colors: formData.colors,
          symbol: formData.symbol,
          motto: formData.motto,
          websiteUrl: formData.websiteUrl,
          email: formData.email,
          phone: formData.phone,
          headquartersAddress: formData.headquartersAddress,
          isRegistered: formData.isRegistered,
          isActive: formData.isActive,
          registrationNumber: formData.registrationNumber,
          registrationDate: formData.registrationDate,
          memberCount: formData.memberCount
        };

        this.politicalPartyService.updatePoliticalPartyByUid(this.politicalPartyId, updateRequest).subscribe({
          next: (response) => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Political party updated successfully');
              this.router.navigate(['/political-parties']);
            } else {
              this.toastService.error('Error', 'Failed to update political party');
            }
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error updating political party:', error);
            this.toastService.error('Error', 'Failed to update political party. Please try again.');
          }
        });
      } else {
        const createRequest: CreatePoliticalPartyRequest = {
          name: formData.name,
          abbreviation: formData.abbreviation,
          description: formData.description,
          foundingDate: formData.foundingDate,
          foundingLocation: formData.foundingLocation,
          ideology: formData.ideology,
          colors: formData.colors,
          symbol: formData.symbol,
          motto: formData.motto,
          websiteUrl: formData.websiteUrl,
          email: formData.email,
          phone: formData.phone,
          headquartersAddress: formData.headquartersAddress,
          isRegistered: formData.isRegistered,
          isActive: formData.isActive,
          registrationNumber: formData.registrationNumber,
          registrationDate: formData.registrationDate,
          memberCount: formData.memberCount
        };

        this.politicalPartyService.createPoliticalParty(createRequest).subscribe({
          next: (response) => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Political party created successfully');
              this.router.navigate(['/political-parties']);
            } else {
              this.toastService.error('Error', 'Failed to create political party');
            }
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error creating political party:', error);
            this.toastService.error('Error', 'Failed to create political party. Please try again.');
          }
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['/political-parties']);
  }
}
