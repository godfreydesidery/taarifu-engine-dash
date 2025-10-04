import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConstituencyService } from '../../../core/services/constituency.service';
import { RegionService } from '../../../core/services/region.service';
import { DistrictService } from '../../../core/services/district.service';
import { ToastService } from '../../../core/services/toast.service';
import { Constituency, CreateConstituencyRequest, UpdateConstituencyRequest } from '../../../core/models/constituency.model';
import { Region } from '../../../core/models/region.model';
import { District } from '../../../core/models/district.model';

@Component({
  selector: 'app-constituency-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="constituency-form-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit Constituency' : 'Create New Constituency' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update constituency information' : 'Add a new constituency to the system' }}</p>
        </div>
        <button type="button" class="btn btn-outline-secondary" routerLink="/constituencies">
          <i class="bi bi-arrow-left me-1"></i>
          Back to List
        </button>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-flag me-2"></i>
                Constituency Information
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="constituencyForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <!-- Basic Information -->
                  <div class="col-md-6">
                    <label for="name" class="form-label">Constituency Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      formControlName="name"
                      placeholder="Enter constituency name"
                      [class.is-invalid]="constituencyForm.get('name')?.invalid && constituencyForm.get('name')?.touched">
                    <div class="invalid-feedback" *ngIf="constituencyForm.get('name')?.hasError('required')">
                      Constituency name is required
                    </div>
                    <div class="invalid-feedback" *ngIf="constituencyForm.get('name')?.hasError('maxlength')">
                      Constituency name must not exceed 100 characters
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="regionId" class="form-label">Region <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="regionId"
                      formControlName="regionId"
                      (change)="onRegionChange()"
                      [class.is-invalid]="constituencyForm.get('regionId')?.invalid && constituencyForm.get('regionId')?.touched">
                      <option value="">Select a region</option>
                      <option *ngFor="let region of regions" [value]="region.id">{{ region.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="constituencyForm.get('regionId')?.hasError('required')">
                      Please select a region
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="districtId" class="form-label">District <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="districtId"
                      formControlName="districtId"
                      [class.is-invalid]="constituencyForm.get('districtId')?.invalid && constituencyForm.get('districtId')?.touched">
                      <option value="">Select a district</option>
                      <option *ngFor="let district of districts" [value]="district.id">{{ district.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="constituencyForm.get('districtId')?.hasError('required')">
                      Please select a district
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="headquarters" class="form-label">Headquarters <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="headquarters"
                      formControlName="headquarters"
                      placeholder="Enter headquarters"
                      [class.is-invalid]="constituencyForm.get('headquarters')?.invalid && constituencyForm.get('headquarters')?.touched">
                    <div class="invalid-feedback" *ngIf="constituencyForm.get('headquarters')?.hasError('required')">
                      Headquarters is required
                    </div>
                    <div class="invalid-feedback" *ngIf="constituencyForm.get('headquarters')?.hasError('maxlength')">
                      Headquarters must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Population and Area -->
                  <div class="col-md-6">
                    <label for="population" class="form-label">Population</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="population"
                      formControlName="population"
                      placeholder="Enter population"
                      min="0">
                  </div>

                  <div class="col-md-6">
                    <label for="areaSqKm" class="form-label">Area (km²)</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="areaSqKm"
                      formControlName="areaSqKm"
                      placeholder="Enter area in square kilometers"
                      min="0"
                      step="0.01">
                  </div>

                  <!-- Coordinates -->
                  <div class="col-md-6">
                    <label for="latitude" class="form-label">Latitude</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="latitude"
                      formControlName="latitude"
                      placeholder="Enter latitude"
                      step="0.000001">
                  </div>

                  <div class="col-md-6">
                    <label for="longitude" class="form-label">Longitude</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="longitude"
                      formControlName="longitude"
                      placeholder="Enter longitude"
                      step="0.000001">
                  </div>

                  <!-- Description -->
                  <div class="col-12">
                    <label for="description" class="form-label">Description</label>
                    <textarea 
                      class="form-control" 
                      id="description"
                      formControlName="description"
                      rows="3"
                      placeholder="Enter constituency description"></textarea>
                  </div>

                  <!-- Status -->
                  <div class="col-12">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="isActive"
                        formControlName="isActive">
                      <label class="form-check-label" for="isActive">
                        Active Constituency
                      </label>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <div class="col-12">
                    <div class="d-flex gap-2">
                      <button 
                        type="submit" 
                        class="btn btn-primary"
                        [disabled]="constituencyForm.invalid || isSubmitting">
                        <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                        <i *ngIf="!isSubmitting" class="bi bi-check-circle me-1"></i>
                        {{ isSubmitting ? 'Saving...' : (isEditMode ? 'Update Constituency' : 'Create Constituency') }}
                      </button>
                      <button 
                        type="button" 
                        class="btn btn-outline-secondary"
                        routerLink="/constituencies">
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
              <h6>Creating a Constituency</h6>
              <ul class="list-unstyled">
                <li><i class="bi bi-check-circle text-success me-2"></i>Provide a unique constituency name</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Select the appropriate region</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Specify the headquarters location</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Add population and area data if available</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Include coordinates for mapping</li>
                <li><i class="bi bi-check-circle text-success me-2"></i>Add the Member of Parliament name</li>
              </ul>
              
              <hr>
              
              <h6>Best Practices</h6>
              <ul class="list-unstyled">
                <li><i class="bi bi-lightbulb text-warning me-2"></i>Use clear, descriptive names</li>
                <li><i class="bi bi-lightbulb text-warning me-2"></i>Ensure headquarters is accurate</li>
                <li><i class="bi bi-lightbulb text-warning me-2"></i>Verify region selection</li>
                <li><i class="bi bi-lightbulb text-warning me-2"></i>Include relevant description</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .constituency-form-container {
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
    }

    .text-danger {
      color: #dc3545 !important;
    }
  `]
})
export class ConstituencyFormComponent implements OnInit {
  constituencyForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  constituencyId: string | null = null;
  regions: Region[] = [];
  districts: District[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private constituencyService: ConstituencyService,
    private regionService: RegionService,
    private districtService: DistrictService,
    private toastService: ToastService
  ) {
    this.constituencyForm = this.createForm();
  }

  ngOnInit() {
    this.loadRegions();
    
    // Check if we're in edit mode
    this.route.params.subscribe(params => {
      if (params['uid']) {
        this.isEditMode = true;
        this.constituencyId = params['uid'];
        this.loadConstituency();
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      regionId: ['', Validators.required],
      districtId: ['', Validators.required],
      headquarters: ['', [Validators.required, Validators.maxLength(100)]],
      population: [null],
      areaSqKm: [null],
      latitude: [null],
      longitude: [null],
      description: [''],
      isActive: [true]
    });
  }

  private loadRegions() {
    this.regionService.getAllRegions(0, 1000).subscribe({
      next: (response) => {
        if (response.status) {
          this.regions = response.data;
        } else {
          this.toastService.error('Error', 'Failed to load regions');
        }
      },
      error: (error) => {
        console.error('Error loading regions:', error);
        this.toastService.error('Error', 'Failed to load regions. Please try again.');
      }
    });
  }

  onRegionChange() {
    const regionId = this.constituencyForm.get('regionId')?.value;
    this.constituencyForm.get('districtId')?.setValue('');
    this.districts = [];
    
    if (regionId) {
      // Find the selected region to get its UID
      const selectedRegion = this.regions.find(region => region.id === Number(regionId));
      if (selectedRegion) {
        this.districtService.getDistrictsByRegionUid(selectedRegion.uid, 0, 1000).subscribe({
          next: (response) => {
            if (response.status) {
              this.districts = response.data;
            } else {
              this.toastService.error('Error', 'Failed to load districts');
            }
          },
          error: (error) => {
            console.error('Error loading districts:', error);
            this.toastService.error('Error', 'Failed to load districts. Please try again.');
          }
        });
      }
    }
  }

  private loadConstituency() {
    if (!this.constituencyId) return;

    this.constituencyService.getConstituencyByUid(this.constituencyId).subscribe({
      next: (response) => {
        if (response.status) {
          const constituency = response.data;
          this.constituencyForm.patchValue({
            name: constituency.name,
            regionId: constituency.regionId,
            districtId: constituency.districtId,
            headquarters: constituency.headquarters,
            population: constituency.population,
            areaSqKm: constituency.areaSqKm,
            latitude: constituency.latitude,
            longitude: constituency.longitude,
            description: constituency.description,
            isActive: constituency.isActive
          });
          
          // Load districts for the selected region
          if (constituency.regionId) {
            this.onRegionChange();
          }
        } else {
          this.toastService.error('Error', 'Failed to load constituency');
          this.router.navigate(['/constituencies']);
        }
      },
      error: (error) => {
        console.error('Error loading constituency:', error);
        this.toastService.error('Error', 'Failed to load constituency. Please try again.');
        this.router.navigate(['/constituencies']);
      }
    });
  }

  onSubmit() {
    if (this.constituencyForm.valid) {
      this.isSubmitting = true;
      const formData = this.constituencyForm.value;

      if (this.isEditMode && this.constituencyId) {
        const updateRequest: UpdateConstituencyRequest = {
          name: formData.name,
          districtId: formData.districtId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };

        this.constituencyService.updateConstituency(this.constituencyId, updateRequest).subscribe({
          next: (response) => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Constituency updated successfully');
              this.router.navigate(['/constituencies']);
            } else {
              this.toastService.error('Error', 'Failed to update constituency');
            }
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error updating constituency:', error);
            this.toastService.error('Error', 'Failed to update constituency. Please try again.');
          }
        });
      } else {
        const createRequest: CreateConstituencyRequest = {
          name: formData.name,
          districtId: formData.districtId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };

        this.constituencyService.createConstituency(createRequest).subscribe({
          next: (response) => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Constituency created successfully');
              this.router.navigate(['/constituencies']);
            } else {
              this.toastService.error('Error', 'Failed to create constituency');
            }
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error creating constituency:', error);
            this.toastService.error('Error', 'Failed to create constituency. Please try again.');
          }
        });
      }
    } else {
      this.toastService.warning('Validation Error', 'Please fill in all required fields correctly');
      this.constituencyForm.markAllAsTouched();
    }
  }
}
