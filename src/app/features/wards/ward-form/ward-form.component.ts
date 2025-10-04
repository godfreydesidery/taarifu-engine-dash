import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WardService } from '../../../core/services/ward.service';
import { DistrictService } from '../../../core/services/district.service';
import { RegionService } from '../../../core/services/region.service';
import { Ward, CreateWardRequest, UpdateWardRequest } from '../../../core/models/ward.model';
import { District } from '../../../core/models/district.model';
import { Region } from '../../../core/models/region.model';

@Component({
  selector: 'app-ward-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="ward-form-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit Ward' : 'Create New Ward' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update ward information' : 'Add a new ward to the system' }}</p>
        </div>
        <button type="button" class="btn btn-outline-secondary" (click)="goBack()">
          <i class="bi bi-arrow-left me-1"></i>
          Back to Wards
        </button>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-house me-2"></i>
                Ward Information
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="wardForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <!-- Basic Information -->
                  <div class="col-md-6">
                    <label for="name" class="form-label">Ward Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      formControlName="name"
                      placeholder="Enter ward name"
                      [class.is-invalid]="wardForm.get('name')?.invalid && wardForm.get('name')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('name')?.hasError('required')">
                      Ward name is required
                    </div>
                    <div class="invalid-feedback" *ngIf="wardForm.get('name')?.hasError('maxlength')">
                      Ward name must not exceed 100 characters
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
                      [class.is-invalid]="wardForm.get('headquarters')?.invalid && wardForm.get('headquarters')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('headquarters')?.hasError('required')">
                      Headquarters is required
                    </div>
                    <div class="invalid-feedback" *ngIf="wardForm.get('headquarters')?.hasError('maxlength')">
                      Headquarters must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Location Information -->
                  <div class="col-md-6">
                    <label for="regionId" class="form-label">Region <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="regionId"
                      formControlName="regionId"
                      (change)="onRegionChange()"
                      [class.is-invalid]="wardForm.get('regionId')?.invalid && wardForm.get('regionId')?.touched">
                      <option value="">Select a region</option>
                      <option *ngFor="let region of regions" [value]="region.id">{{ region.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="wardForm.get('regionId')?.hasError('required')">
                      Region is required
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="districtId" class="form-label">District <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="districtId"
                      formControlName="districtId"
                      [class.is-invalid]="wardForm.get('districtId')?.invalid && wardForm.get('districtId')?.touched">
                      <option value="">Select a district</option>
                      <option *ngFor="let district of filteredDistricts" [value]="district.id">{{ district.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="wardForm.get('districtId')?.hasError('required')">
                      District is required
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
                      min="0"
                      [class.is-invalid]="wardForm.get('population')?.invalid && wardForm.get('population')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('population')?.hasError('min')">
                      Population must be a positive number
                    </div>
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
                      step="0.1"
                      [class.is-invalid]="wardForm.get('areaSqKm')?.invalid && wardForm.get('areaSqKm')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('areaSqKm')?.hasError('min')">
                      Area must be a positive number
                    </div>
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
                      step="0.000001"
                      [class.is-invalid]="wardForm.get('latitude')?.invalid && wardForm.get('latitude')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('latitude')?.hasError('min') || wardForm.get('latitude')?.hasError('max')">
                      Latitude must be between -90 and 90
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="longitude" class="form-label">Longitude</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="longitude"
                      formControlName="longitude"
                      placeholder="Enter longitude"
                      step="0.000001"
                      [class.is-invalid]="wardForm.get('longitude')?.invalid && wardForm.get('longitude')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('longitude')?.hasError('min') || wardForm.get('longitude')?.hasError('max')">
                      Longitude must be between -180 and 180
                    </div>
                  </div>

                  <!-- Executive Officer -->
                  <div class="col-md-6">
                    <label for="executiveOfficer" class="form-label">Executive Officer</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="executiveOfficer"
                      formControlName="executiveOfficer"
                      placeholder="Enter executive officer name"
                      [class.is-invalid]="wardForm.get('executiveOfficer')?.invalid && wardForm.get('executiveOfficer')?.touched">
                    <div class="invalid-feedback" *ngIf="wardForm.get('executiveOfficer')?.hasError('maxlength')">
                      Executive officer name must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Status -->
                  <div class="col-md-6">
                    <label for="isActive" class="form-label">Status</label>
                    <select 
                      class="form-select" 
                      id="isActive"
                      formControlName="isActive">
                      <option [value]="true">Active</option>
                      <option [value]="false">Inactive</option>
                    </select>
                  </div>

                  <!-- Description -->
                  <div class="col-12">
                    <label for="description" class="form-label">Description</label>
                    <textarea 
                      class="form-control" 
                      id="description"
                      formControlName="description"
                      rows="3"
                      placeholder="Enter ward description"
                      [class.is-invalid]="wardForm.get('description')?.invalid && wardForm.get('description')?.touched"></textarea>
                    <div class="invalid-feedback" *ngIf="wardForm.get('description')?.hasError('maxlength')">
                      Description must not exceed 500 characters
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
                        [disabled]="wardForm.invalid || isLoading">
                        <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                        <i *ngIf="!isLoading" class="bi bi-check-circle me-1"></i>
                        {{ isEditMode ? 'Update Ward' : 'Create Ward' }}
                      </button>
                      <button 
                        type="button" 
                        class="btn btn-outline-secondary"
                        (click)="goBack()">
                        <i class="bi bi-x-circle me-1"></i>
                        Cancel
                      </button>
                    </div>
                  </div>
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
                <li>• Ward Name</li>
                <li>• Headquarters</li>
                <li>• Region</li>
                <li>• District</li>
              </ul>

              <h6 class="mt-3">Optional Fields</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Population</li>
                <li>• Area (km²)</li>
                <li>• Coordinates</li>
                <li>• Executive Officer</li>
                <li>• Description</li>
              </ul>

              <h6 class="mt-3">Tips</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Select region first to filter districts</li>
                <li>• Use precise coordinates for mapping</li>
                <li>• Keep descriptions concise and informative</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ward-form-container {
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

    .btn {
      font-weight: 500;
    }

    .spinner-border-sm {
      width: 1rem;
      height: 1rem;
    }
  `]
})
export class WardFormComponent implements OnInit {
  wardForm: FormGroup;
  isEditMode = false;
  isLoading = false;
  wardId: string | null = null;
  
  regions: Region[] = [];
  districts: District[] = [];
  filteredDistricts: District[] = [];

  constructor(
    private fb: FormBuilder,
    private wardService: WardService,
    private districtService: DistrictService,
    private regionService: RegionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.wardForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      headquarters: ['', [Validators.required, Validators.maxLength(100)]],
      regionId: [null, [Validators.required]],
      districtId: [null, [Validators.required]],
      population: [0, [Validators.min(0)]],
      areaSqKm: [0, [Validators.min(0)]],
      latitude: [0, [Validators.min(-90), Validators.max(90)]],
      longitude: [0, [Validators.min(-180), Validators.max(180)]],
      executiveOfficer: ['', [Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      isActive: [true]
    });
  }

  ngOnInit() {
    this.loadRegions();
    this.loadDistricts();
    
    // Check if we're in edit mode
    this.wardId = this.route.snapshot.paramMap.get('uid');
    if (this.wardId) {
      this.isEditMode = true;
      this.loadWard(this.wardId);
    }
  }

  loadRegions() {
    this.regionService.getAllRegions(0, 1000).subscribe({
      next: (response: any) => {
        this.regions = response.data || [];
      },
      error: (error: any) => {
        console.error('Error loading regions:', error);
      }
    });
  }

  loadDistricts() {
    console.log('Loading districts...');
    this.districtService.getAllDistricts(0, 1000).subscribe({
      next: (response: any) => {
        this.districts = response.data || [];
        this.filteredDistricts = this.districts;
        console.log('Loaded districts:', this.districts);
        console.log('Sample district structure:', this.districts[0]);
      },
      error: (error: any) => {
        console.error('Error loading districts:', error);
      }
    });
  }

  loadWard(uid: string) {
    this.isLoading = true;
    console.log('Loading ward with UID:', uid);
    this.wardService.getWardByUid(uid).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Ward API Response:', response);
        if (response.status) {
          const ward = response.data;
          console.log('Ward data:', ward);
          this.wardForm.patchValue({
            name: ward.name,
            headquarters: ward.headquarters,
            regionId: ward.regionId,
            districtId: ward.districtId,
            population: ward.population,
            areaSqKm: ward.areaSqKm,
            latitude: ward.latitude,
            longitude: ward.longitude,
            executiveOfficer: ward.executiveOfficer,
            description: ward.description,
            isActive: ward.isActive
          });
          
          // Filter districts based on selected region
          this.onRegionChange();
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading ward:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        alert(`Error loading ward: ${error.error?.message || error.message || 'Unknown error'}`);
        this.goBack();
      }
    });
  }

  onRegionChange() {
    const selectedRegionId = this.wardForm.get('regionId')?.value;
    console.log('Region changed to:', selectedRegionId);
    
    if (selectedRegionId) {
      // Find the selected region to get its UID
      const selectedRegion = this.regions.find(r => r.id === Number(selectedRegionId));
      console.log('Selected region:', selectedRegion);
      
      if (selectedRegion) {
        // Load districts for this specific region using the API
        this.districtService.getDistrictsByRegionUid(selectedRegion.uid, 0, 1000).subscribe({
          next: (response: any) => {
            this.filteredDistricts = response.data || [];
            console.log('Loaded districts for region', selectedRegion.name, ':', this.filteredDistricts);
            
            // Reset district selection if current selection is not in filtered list
            const currentDistrictId = this.wardForm.get('districtId')?.value;
            if (currentDistrictId && !this.filteredDistricts.find(d => d.id === currentDistrictId)) {
              this.wardForm.patchValue({ districtId: null });
            }
          },
          error: (error: any) => {
            console.error('Error loading districts for region:', error);
            this.filteredDistricts = [];
          }
        });
      }
    } else {
      // No region selected, show all districts
      this.filteredDistricts = this.districts;
      console.log('No region selected, showing all districts:', this.filteredDistricts);
    }
  }

  onSubmit() {
    if (this.wardForm.valid) {
      this.isLoading = true;
      const formData = this.wardForm.value;
      
      if (this.isEditMode && this.wardId) {
        // Update existing ward
        const updateRequest: UpdateWardRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          districtId: formData.districtId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };

        this.wardService.updateWard(this.wardId, updateRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              alert('Ward updated successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error updating ward:', error);
            alert(`Error updating ward: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      } else {
        // Create new ward
        const createRequest: CreateWardRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          districtId: formData.districtId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };

        this.wardService.createWard(createRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              alert('Ward created successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error creating ward:', error);
            alert(`Error creating ward: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.wardForm.controls).forEach(key => {
        this.wardForm.get(key)?.markAsTouched();
      });
    }
  }

  goBack() {
    this.router.navigate(['/wards']);
  }
}
