import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ParliamentService } from '../../../core/services/parliament.service';
import { ToastService } from '../../../core/services/toast.service';
import { CreateParliamentRequest, UpdateParliamentRequest } from '../../../core/models/parliament.model';

@Component({
  selector: 'app-parliament-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-building me-2"></i>
                {{ isEditMode ? 'Edit Parliament' : 'Create New Parliament' }}
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="parliamentForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <!-- Name -->
                  <div class="col-md-6">
                    <label for="name" class="form-label">Parliament Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      formControlName="name"
                      placeholder="Enter parliament name"
                      [class.is-invalid]="parliamentForm.get('name')?.invalid && parliamentForm.get('name')?.touched">
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('name')?.hasError('required')">
                      Parliament name is required
                    </div>
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('name')?.hasError('minlength')">
                      Parliament name must be at least 2 characters
                    </div>
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('name')?.hasError('maxlength')">
                      Parliament name must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="col-md-6">
                    <label for="description" class="form-label">Description</label>
                    <textarea 
                      class="form-control" 
                      id="description"
                      formControlName="description"
                      rows="3"
                      placeholder="Enter parliament description"
                      [class.is-invalid]="parliamentForm.get('description')?.invalid && parliamentForm.get('description')?.touched">
                    </textarea>
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('description')?.hasError('maxlength')">
                      Description must not exceed 1000 characters
                    </div>
                  </div>

                  <!-- Start Date -->
                  <div class="col-md-6">
                    <label for="startDate" class="form-label">Start Date <span class="text-danger">*</span></label>
                    <input 
                      type="date" 
                      class="form-control" 
                      id="startDate"
                      formControlName="startDate"
                      [class.is-invalid]="parliamentForm.get('startDate')?.invalid && parliamentForm.get('startDate')?.touched">
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('startDate')?.hasError('required')">
                      Start date is required
                    </div>
                  </div>

                  <!-- End Date -->
                  <div class="col-md-6">
                    <label for="endDate" class="form-label">End Date <span class="text-danger">*</span></label>
                    <input 
                      type="date" 
                      class="form-control" 
                      id="endDate"
                      formControlName="endDate"
                      [class.is-invalid]="parliamentForm.get('endDate')?.invalid && parliamentForm.get('endDate')?.touched">
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('endDate')?.hasError('required')">
                      End date is required
                    </div>
                    <div class="invalid-feedback" *ngIf="parliamentForm.get('endDate')?.hasError('dateRange')">
                      End date must be after start date
                    </div>
                  </div>

                  <!-- Status Options -->
                  <div class="col-md-6">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="isActive"
                        formControlName="isActive">
                      <label class="form-check-label" for="isActive">
                        Active Parliament
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="isCurrent"
                        formControlName="isCurrent">
                      <label class="form-check-label" for="isCurrent">
                        Current Parliament
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
                        [disabled]="parliamentForm.invalid || isSubmitting">
                        <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                        <i *ngIf="!isSubmitting" class="bi bi-check-lg me-1"></i>
                        {{ isEditMode ? 'Update Parliament' : 'Create Parliament' }}
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
              <h6>Creating a Parliament</h6>
              <ul class="list-unstyled">
                <li><i class="bi bi-check-circle text-success me-2"></i>Provide a unique parliament name</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Set appropriate start and end dates</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>End date must be after start date</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Only one parliament can be current at a time</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Add description for better context</li>
              </ul>
              
              <hr>
              
              <h6>Parliament Status</h6>
              <ul class="list-unstyled">
                <li><span class="badge bg-primary me-2">Current</span> Currently active parliament</li>
                <li><span class="badge bg-success me-2">Active</span> Parliament is operational</li>
                <li><span class="badge bg-warning me-2">Upcoming</span> Parliament not yet started</li>
                <li><span class="badge bg-secondary me-2">Ended</span> Parliament has concluded</li>
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
  `]
})
export class ParliamentFormComponent implements OnInit {
  parliamentForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  parliamentId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private parliamentService: ParliamentService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.parliamentForm = this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parliamentId = params['uid'];
      if (this.parliamentId) {
        this.isEditMode = true;
        this.loadParliament();
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(1000)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [true],
      isCurrent: [false]
    }, { validators: this.dateRangeValidator });
  }

  private dateRangeValidator(form: FormGroup) {
    const startDate = form.get('startDate')?.value;
    const endDate = form.get('endDate')?.value;
    
    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      return { dateRange: true };
    }
    
    return null;
  }

  private loadParliament() {
    if (!this.parliamentId) return;

    this.parliamentService.getParliamentByUid(this.parliamentId).subscribe({
      next: (response) => {
        if (response.status) {
          const parliament = response.data;
          this.parliamentForm.patchValue({
            name: parliament.name,
            description: parliament.description,
            startDate: parliament.startDate.split('T')[0], // Convert to date format
            endDate: parliament.endDate.split('T')[0],
            isActive: parliament.isActive,
            isCurrent: parliament.isCurrent
          });
        } else {
          this.toastService.error('Error', 'Failed to load parliament');
          this.router.navigate(['/parliaments']);
        }
      },
      error: (error) => {
        console.error('Error loading parliament:', error);
        this.toastService.error('Error', 'Failed to load parliament. Please try again.');
        this.router.navigate(['/parliaments']);
      }
    });
  }

  onSubmit() {
    if (this.parliamentForm.valid) {
      this.isSubmitting = true;
      const formData = this.parliamentForm.value;

      if (this.isEditMode && this.parliamentId) {
        const updateRequest: UpdateParliamentRequest = {
          name: formData.name,
          description: formData.description,
          startDate: formData.startDate,
          endDate: formData.endDate,
          isActive: formData.isActive,
          isCurrent: formData.isCurrent
        };

        this.parliamentService.updateParliamentByUid(this.parliamentId, updateRequest).subscribe({
          next: (response) => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Parliament updated successfully');
              this.router.navigate(['/parliaments']);
            } else {
              this.toastService.error('Error', 'Failed to update parliament');
            }
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error updating parliament:', error);
            this.toastService.error('Error', 'Failed to update parliament. Please try again.');
          }
        });
      } else {
        const createRequest: CreateParliamentRequest = {
          name: formData.name,
          description: formData.description,
          startDate: formData.startDate,
          endDate: formData.endDate,
          isActive: formData.isActive,
          isCurrent: formData.isCurrent
        };

        this.parliamentService.createParliament(createRequest).subscribe({
          next: (response) => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Parliament created successfully');
              this.router.navigate(['/parliaments']);
            } else {
              this.toastService.error('Error', 'Failed to create parliament');
            }
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error creating parliament:', error);
            this.toastService.error('Error', 'Failed to create parliament. Please try again.');
          }
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['/parliaments']);
  }
}
