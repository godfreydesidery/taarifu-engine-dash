import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { VillageService } from '../../../core/services/village.service';
import { WardService } from '../../../core/services/ward.service';
import { DistrictService } from '../../../core/services/district.service';
import { RegionService } from '../../../core/services/region.service';
import { Village, CreateVillageRequest, UpdateVillageRequest } from '../../../core/models/village.model';
import { Ward } from '../../../core/models/ward.model';
import { District } from '../../../core/models/district.model';
import { Region } from '../../../core/models/region.model';

@Component({
  selector: 'app-village-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="village-form-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit Village' : 'Create New Village' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update village information' : 'Add a new village to the system' }}</p>
        </div>
        <button type="button" class="btn btn-outline-secondary" (click)="goBack()">
          <i class="bi bi-arrow-left me-1"></i>
          Back to Villages
        </button>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-house-door me-2"></i>
                Village Information
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="villageForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <!-- Basic Information -->
                  <div class="col-md-6">
                    <label for="name" class="form-label">Village Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      formControlName="name"
                      placeholder="Enter village name"
                      [class.is-invalid]="villageForm.get('name')?.invalid && villageForm.get('name')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('name')?.hasError('required')">
                      Village name is required
                    </div>
                    <div class="invalid-feedback" *ngIf="villageForm.get('name')?.hasError('maxlength')">
                      Village name must not exceed 100 characters
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
                      [class.is-invalid]="villageForm.get('headquarters')?.invalid && villageForm.get('headquarters')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('headquarters')?.hasError('required')">
                      Headquarters is required
                    </div>
                    <div class="invalid-feedback" *ngIf="villageForm.get('headquarters')?.hasError('maxlength')">
                      Headquarters must not exceed 100 characters
                    </div>
                  </div>

                  <!-- Location Information -->
                  <div class="col-md-4">
                    <label for="regionId" class="form-label">Region <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="regionId"
                      formControlName="regionId"
                      (change)="onRegionChange()"
                      [class.is-invalid]="villageForm.get('regionId')?.invalid && villageForm.get('regionId')?.touched">
                      <option value="">Select a region</option>
                      <option *ngFor="let region of regions" [value]="region.id">{{ region.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="villageForm.get('regionId')?.hasError('required')">
                      Region is required
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="districtId" class="form-label">District <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="districtId"
                      formControlName="districtId"
                      (change)="onDistrictChange()"
                      [class.is-invalid]="villageForm.get('districtId')?.invalid && villageForm.get('districtId')?.touched">
                      <option value="">Select a district</option>
                      <option *ngFor="let district of filteredDistricts" [value]="district.id">{{ district.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="villageForm.get('districtId')?.hasError('required')">
                      District is required
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="wardId" class="form-label">Ward <span class="text-danger">*</span></label>
                    <select 
                      class="form-select" 
                      id="wardId"
                      formControlName="wardId"
                      [class.is-invalid]="villageForm.get('wardId')?.invalid && villageForm.get('wardId')?.touched">
                      <option value="">Select a ward</option>
                      <option *ngFor="let ward of filteredWards" [value]="ward.id">{{ ward.name }}</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="villageForm.get('wardId')?.hasError('required')">
                      Ward is required
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
                      [class.is-invalid]="villageForm.get('population')?.invalid && villageForm.get('population')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('population')?.hasError('min')">
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
                      [class.is-invalid]="villageForm.get('areaSqKm')?.invalid && villageForm.get('areaSqKm')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('areaSqKm')?.hasError('min')">
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
                      [class.is-invalid]="villageForm.get('latitude')?.invalid && villageForm.get('latitude')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('latitude')?.hasError('min') || villageForm.get('latitude')?.hasError('max')">
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
                      [class.is-invalid]="villageForm.get('longitude')?.invalid && villageForm.get('longitude')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('longitude')?.hasError('min') || villageForm.get('longitude')?.hasError('max')">
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
                      [class.is-invalid]="villageForm.get('executiveOfficer')?.invalid && villageForm.get('executiveOfficer')?.touched">
                    <div class="invalid-feedback" *ngIf="villageForm.get('executiveOfficer')?.hasError('maxlength')">
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
                      placeholder="Enter village description"
                      [class.is-invalid]="villageForm.get('description')?.invalid && villageForm.get('description')?.touched"></textarea>
                    <div class="invalid-feedback" *ngIf="villageForm.get('description')?.hasError('maxlength')">
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
                        [disabled]="villageForm.invalid || isLoading">
                        <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                        <i *ngIf="!isLoading" class="bi bi-check-circle me-1"></i>
                        {{ isEditMode ? 'Update Village' : 'Create Village' }}
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
                <li>• Village Name</li>
                <li>• Headquarters</li>
                <li>• Region</li>
                <li>• District</li>
                <li>• Ward</li>
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
                <li>• Select district to filter wards</li>
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
    .village-form-container {
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
export class VillageFormComponent implements OnInit {
  villageForm: FormGroup;
  isEditMode = false;
  isLoading = false;
  villageId: string | null = null;
  
  regions: Region[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  filteredDistricts: District[] = [];
  filteredWards: Ward[] = [];

  constructor(
    private fb: FormBuilder,
    private villageService: VillageService,
    private wardService: WardService,
    private districtService: DistrictService,
    private regionService: RegionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.villageForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      headquarters: ['', [Validators.required, Validators.maxLength(100)]],
      regionId: [null, [Validators.required]],
      districtId: [null, [Validators.required]],
      wardId: [null, [Validators.required]],
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
    this.loadWards();
    
    // Check if we're in edit mode
    this.villageId = this.route.snapshot.paramMap.get('uid');
    if (this.villageId) {
      this.isEditMode = true;
      this.loadVillage(this.villageId);
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

  loadWards() {
    console.log('Loading wards...');
    this.wardService.getAllWards(0, 1000).subscribe({
      next: (response: any) => {
        this.wards = response.data || [];
        this.filteredWards = this.wards;
        console.log('Loaded wards:', this.wards);
        console.log('Sample ward structure:', this.wards[0]);
      },
      error: (error: any) => {
        console.error('Error loading wards:', error);
      }
    });
  }

  loadVillage(uid: string) {
    this.isLoading = true;
    console.log('Loading village with UID:', uid);
    this.villageService.getVillageByUid(uid).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Village API Response:', response);
        if (response.status) {
          const village = response.data;
          console.log('Village data:', village);
          this.villageForm.patchValue({
            name: village.name,
            headquarters: village.headquarters,
            regionId: village.regionId,
            districtId: village.districtId,
            wardId: village.wardId,
            population: village.population,
            areaSqKm: village.areaSqKm,
            latitude: village.latitude,
            longitude: village.longitude,
            executiveOfficer: village.executiveOfficer,
            description: village.description,
            isActive: village.isActive
          });
          
          // Filter districts and wards based on selected values
          this.onRegionChange();
          this.onDistrictChange();
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading village:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        alert(`Error loading village: ${error.error?.message || error.message || 'Unknown error'}`);
        this.goBack();
      }
    });
  }

  onRegionChange() {
    const selectedRegionId = this.villageForm.get('regionId')?.value;
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
            
            // Reset district and ward selections if current selections are not in filtered lists
            const currentDistrictId = this.villageForm.get('districtId')?.value;
            if (currentDistrictId && !this.filteredDistricts.find(d => d.id === currentDistrictId)) {
              this.villageForm.patchValue({ districtId: null, wardId: null });
            }
            
            // Update wards based on new district selection
            this.onDistrictChange();
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

  onDistrictChange() {
    const selectedDistrictId = this.villageForm.get('districtId')?.value;
    console.log('District changed to:', selectedDistrictId);
    
    if (selectedDistrictId) {
      // Find the selected district to get its UID
      const selectedDistrict = this.filteredDistricts.find(d => d.id === Number(selectedDistrictId));
      console.log('Selected district:', selectedDistrict);
      
      if (selectedDistrict) {
        // Load wards for this specific district using the API
        this.wardService.getWardsByDistrictUid(selectedDistrict.uid, 0, 1000).subscribe({
          next: (response: any) => {
            this.filteredWards = response.data || [];
            console.log('Loaded wards for district', selectedDistrict.name, ':', this.filteredWards);
            
            // Reset ward selection if current selection is not in filtered list
            const currentWardId = this.villageForm.get('wardId')?.value;
            if (currentWardId && !this.filteredWards.find(w => w.id === currentWardId)) {
              this.villageForm.patchValue({ wardId: null });
            }
          },
          error: (error: any) => {
            console.error('Error loading wards for district:', error);
            this.filteredWards = [];
          }
        });
      }
    } else {
      // No district selected, show all wards
      this.filteredWards = this.wards;
      console.log('No district selected, showing all wards:', this.filteredWards);
    }
  }

  onSubmit() {
    if (this.villageForm.valid) {
      this.isLoading = true;
      const formData = this.villageForm.value;
      
      if (this.isEditMode && this.villageId) {
        // Update existing village
        const updateRequest: UpdateVillageRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          wardId: formData.wardId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };

        this.villageService.updateVillage(this.villageId, updateRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              alert('Village updated successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error updating village:', error);
            alert(`Error updating village: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      } else {
        // Create new village
        const createRequest: CreateVillageRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          wardId: formData.wardId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };

        this.villageService.createVillage(createRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              alert('Village created successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error creating village:', error);
            alert(`Error creating village: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.villageForm.controls).forEach(key => {
        this.villageForm.get(key)?.markAsTouched();
      });
    }
  }

  goBack() {
    this.router.navigate(['/villages']);
  }
}
