import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegionService } from '../../../core/services/region.service';
import { ToastService } from '../../../core/services/toast.service';
import { Region, CreateRegionRequest, UpdateRegionRequest } from '../../../core/models/region.model';

@Component({
  selector: 'app-region-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit Region' : 'Create Region' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update region information' : 'Add a new region to the system' }}</p>
        </div>
        <button type="button" class="btn btn-outline-secondary" (click)="goBack()">
          <i class="bi bi-arrow-left me-1"></i>
          Back
        </button>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-geo-alt-fill me-2"></i>
                Region Information
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="regionForm" (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="name" class="form-label">Region Name <span class="text-danger">*</span></label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name"
                        formControlName="name"
                        [class.is-invalid]="regionForm.get('name')?.invalid && regionForm.get('name')?.touched"
                        placeholder="Enter region name">
                      <div class="invalid-feedback" *ngIf="regionForm.get('name')?.hasError('required')">
                        Region name is required
                      </div>
                      <div class="invalid-feedback" *ngIf="regionForm.get('name')?.hasError('maxlength')">
                        Region name must not exceed 100 characters
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="capital" class="form-label">Capital</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="capital"
                        formControlName="capital"
                        placeholder="Enter capital city">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="population" class="form-label">Population</label>
                      <input 
                        type="number" 
                        class="form-control" 
                        id="population"
                        formControlName="population"
                        min="0"
                        placeholder="Enter population">
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="areaSqKm" class="form-label">Area (km²)</label>
                      <input 
                        type="number" 
                        class="form-control" 
                        id="areaSqKm"
                        formControlName="areaSqKm"
                        min="0"
                        step="0.01"
                        placeholder="Enter area in square kilometers">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="latitude" class="form-label">Latitude</label>
                      <input 
                        type="number" 
                        class="form-control" 
                        id="latitude"
                        formControlName="latitude"
                        step="0.000001"
                        placeholder="Enter latitude">
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="longitude" class="form-label">Longitude</label>
                      <input 
                        type="number" 
                        class="form-control" 
                        id="longitude"
                        formControlName="longitude"
                        step="0.000001"
                        placeholder="Enter longitude">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="commissioner" class="form-label">Regional Commissioner</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="commissioner"
                        formControlName="commissioner"
                        placeholder="Enter commissioner name">
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <div class="form-check form-switch">
                        <input 
                          class="form-check-input" 
                          type="checkbox" 
                          id="isActive"
                          formControlName="isActive">
                        <label class="form-check-label" for="isActive">
                          Active
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <textarea 
                    class="form-control" 
                    id="description"
                    formControlName="description"
                    rows="3"
                    placeholder="Enter region description"></textarea>
                </div>

                <div class="d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-secondary" (click)="goBack()">
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    class="btn btn-primary" 
                    [disabled]="regionForm.invalid || isLoading">
                    <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    {{ isLoading ? 'Saving...' : (isEditMode ? 'Update Region' : 'Create Region') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Help Panel -->
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <h6 class="card-title mb-0">
                <i class="bi bi-info-circle me-2"></i>
                Help & Guidelines
              </h6>
            </div>
            <div class="card-body">
              <h6>Required Fields</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Region Name</li>
                <li>• Capital</li>
                <li>• Commissioner</li>
              </ul>

              <h6 class="mt-3">Optional Fields</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Population</li>
                <li>• Area (km²)</li>
                <li>• Coordinates (Latitude/Longitude)</li>
                <li>• Description</li>
              </ul>

              <h6 class="mt-3">Tips</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Use official region names</li>
                <li>• Capital should be the main city</li>
                <li>• Use precise coordinates for mapping</li>
                <li>• Population should be current estimates</li>
                <li>• Keep descriptions concise and informative</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container-fluid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .card {
      border: none;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }

    .card-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
    }

    .form-label {
      font-weight: 500;
      color: #495057;
    }

    .text-danger {
      color: #dc3545 !important;
    }
  `]
})
export class RegionFormComponent implements OnInit {
  regionForm: FormGroup;
  isEditMode = false;
  isLoading = false;
  regionId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private regionService: RegionService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.regionForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      capital: ['', [Validators.maxLength(100)]],
      population: [null, [Validators.min(0)]],
      areaSqKm: [null, [Validators.min(0)]],
      latitude: [null],
      longitude: [null],
      commissioner: ['', [Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      isActive: [true]
    });
  }

  ngOnInit() {
    this.regionId = this.route.snapshot.paramMap.get('uid');
    this.isEditMode = !!this.regionId;

    if (this.isEditMode && this.regionId) {
      this.loadRegion(this.regionId);
    }
  }

  loadRegion(uid: string) {
    this.isLoading = true;
    console.log('Loading region with UID:', uid);
    this.regionService.getRegionByUid(uid).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Region API Response:', response);
        if (response.status) {
          const region = response.data;
          console.log('Region data:', region);
          this.regionForm.patchValue({
            name: region.name,
            capital: region.capital,
            population: region.population,
            areaSqKm: region.areaSqKm,
            latitude: region.latitude,
            longitude: region.longitude,
            commissioner: region.commissioner,
            description: region.description,
            isActive: region.isActive
          });
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading region:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        this.toastService.error('Error Loading Region', error.error?.message || error.message || 'Unknown error');
        this.goBack();
      }
    });
  }

  onSubmit() {
    if (this.regionForm.valid) {
      this.isLoading = true;
      const formData = this.regionForm.value;

      if (this.isEditMode && this.regionId) {
        const updateRequest: UpdateRegionRequest = {
          name: formData.name,
          capital: formData.capital,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          commissioner: formData.commissioner,
          description: formData.description,
          isActive: formData.isActive
        };

        this.regionService.updateRegion(this.regionId, updateRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Region Updated', 'Region updated successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error updating region:', error);
            this.toastService.error('Error Updating Region', 'Failed to update region');
          }
        });
      } else {
        const createRequest: CreateRegionRequest = {
          name: formData.name,
          capital: formData.capital,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          commissioner: formData.commissioner,
          description: formData.description,
          isActive: formData.isActive
        };

        this.regionService.createRegion(createRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Region Created', 'Region created successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error creating region:', error);
            this.toastService.error('Error Creating Region', 'Failed to create region');
          }
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.regionForm.controls).forEach(key => {
      const control = this.regionForm.get(key);
      control?.markAsTouched();
    });
  }

  goBack() {
    this.router.navigate(['/regions']);
  }
}
