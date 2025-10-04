import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DistrictService } from '../../../core/services/district.service';
import { RegionService } from '../../../core/services/region.service';
import { ToastService } from '../../../core/services/toast.service';
import { District, CreateDistrictRequest, UpdateDistrictRequest } from '../../../core/models/district.model';
import { Region } from '../../../core/models/region.model';

@Component({
  selector: 'app-district-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit District' : 'Create District' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update district information' : 'Add a new district to the system' }}</p>
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
                <i class="bi bi-building me-2"></i>
                District Information
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="districtForm" (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="name" class="form-label">District Name <span class="text-danger">*</span></label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name"
                        formControlName="name"
                        [class.is-invalid]="districtForm.get('name')?.invalid && districtForm.get('name')?.touched"
                        placeholder="Enter district name">
                      <div class="invalid-feedback" *ngIf="districtForm.get('name')?.hasError('required')">
                        District name is required
                      </div>
                      <div class="invalid-feedback" *ngIf="districtForm.get('name')?.hasError('maxlength')">
                        District name must not exceed 100 characters
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="regionId" class="form-label">Region <span class="text-danger">*</span></label>
                      <select 
                        class="form-select" 
                        id="regionId"
                        formControlName="regionId"
                        [class.is-invalid]="districtForm.get('regionId')?.invalid && districtForm.get('regionId')?.touched">
                        <option value="">Select a region</option>
                        <option *ngFor="let region of regions" [value]="region.id">{{ region.name }}</option>
                      </select>
                      <div class="invalid-feedback" *ngIf="districtForm.get('regionId')?.hasError('required')">
                        Region is required
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="headquarters" class="form-label">Headquarters</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="headquarters"
                        formControlName="headquarters"
                        placeholder="Enter headquarters">
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

                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <textarea 
                    class="form-control" 
                    id="description"
                    formControlName="description"
                    rows="3"
                    placeholder="Enter district description"></textarea>
                </div>

                <div class="d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-secondary" (click)="goBack()">
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    class="btn btn-primary" 
                    [disabled]="districtForm.invalid || isLoading">
                    <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    {{ isLoading ? 'Saving...' : (isEditMode ? 'Update District' : 'Create District') }}
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
                <li>• District Name</li>
                <li>• Region</li>
                <li>• Headquarters</li>
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
                <li>• Select the correct region first</li>
                <li>• Use official district names</li>
                <li>• Headquarters should be the main town</li>
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
export class DistrictFormComponent implements OnInit {
  districtForm: FormGroup;
  isEditMode = false;
  isLoading = false;
  districtId: string | null = null;
  regions: Region[] = [];

  constructor(
    private fb: FormBuilder,
    private districtService: DistrictService,
    private regionService: RegionService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.districtForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      regionId: [null, [Validators.required]],
      headquarters: ['', [Validators.maxLength(100)]],
      population: [null, [Validators.min(0)]],
      areaSqKm: [null, [Validators.min(0)]],
      latitude: [null],
      longitude: [null],
      description: ['', [Validators.maxLength(500)]],
      isActive: [true]
    });
  }

  ngOnInit() {
    this.districtId = this.route.snapshot.paramMap.get('uid');
    this.isEditMode = !!this.districtId;

    this.loadRegions();

    if (this.isEditMode && this.districtId) {
      this.loadDistrict(this.districtId);
    }
  }

  loadRegions() {
    this.regionService.getActiveRegions(0, 1000).subscribe({
      next: (response) => {
        this.regions = response.data || [];
      },
      error: (error) => {
        console.error('Error loading regions:', error);
        this.regions = [];
      }
    });
  }

  loadDistrict(uid: string) {
    this.isLoading = true;
    this.districtService.getDistrictByUid(uid).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status) {
          const district = response.data;
          this.districtForm.patchValue({
            name: district.name,
            regionId: district.regionId,
            headquarters: district.headquarters,
            population: district.population,
            areaSqKm: district.areaSqKm,
            latitude: district.latitude,
            longitude: district.longitude,
            description: district.description,
            isActive: district.isActive
          });
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading district:', error);
        this.toastService.error('Error Loading District', error.error?.message || error.message || 'Unknown error');
        this.goBack();
      }
    });
  }

  onSubmit() {
    if (this.districtForm.valid) {
      this.isLoading = true;
      const formData = this.districtForm.value;

      if (this.isEditMode && this.districtId) {
        const updateRequest: UpdateDistrictRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };

        this.districtService.updateDistrict(this.districtId, updateRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('District Updated', 'District updated successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error updating district:', error);
            this.toastService.error('Error Updating District', 'Failed to update district');
          }
        });
      } else {
        const createRequest: CreateDistrictRequest = {
          name: formData.name,
          regionId: formData.regionId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };

        this.districtService.createDistrict(createRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('District Created', 'District created successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error creating district:', error);
            this.toastService.error('Error Creating District', 'Failed to create district');
          }
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.districtForm.controls).forEach(key => {
      const control = this.districtForm.get(key);
      control?.markAsTouched();
    });
  }

  goBack() {
    this.router.navigate(['/districts']);
  }
}
