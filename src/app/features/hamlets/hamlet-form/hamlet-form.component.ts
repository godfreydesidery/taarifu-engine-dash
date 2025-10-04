import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HamletService } from '../../../core/services/hamlet.service';
import { RegionService } from '../../../core/services/region.service';
import { DistrictService } from '../../../core/services/district.service';
import { WardService } from '../../../core/services/ward.service';
import { VillageService } from '../../../core/services/village.service';
import { ToastService } from '../../../core/services/toast.service';
import { Region } from '../../../core/models/region.model';
import { District } from '../../../core/models/district.model';
import { Ward } from '../../../core/models/ward.model';
import { Village } from '../../../core/models/village.model';
import { CreateHamletRequest, UpdateHamletRequest } from '../../../core/models/hamlet.model';

@Component({
  selector: 'app-hamlet-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit Hamlet' : 'Create Hamlet' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update hamlet information' : 'Add a new hamlet to the system' }}</p>
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
                <i class="bi bi-house-door-fill me-2"></i>
                Hamlet Information
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="hamletForm" (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="name" class="form-label">Hamlet Name <span class="text-danger">*</span></label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name"
                        formControlName="name"
                        [class.is-invalid]="hamletForm.get('name')?.invalid && hamletForm.get('name')?.touched"
                        placeholder="Enter hamlet name">
                      <div class="invalid-feedback" *ngIf="hamletForm.get('name')?.hasError('required')">
                        Hamlet name is required
                      </div>
                      <div class="invalid-feedback" *ngIf="hamletForm.get('name')?.hasError('maxlength')">
                        Hamlet name must not exceed 100 characters
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
                        [class.is-invalid]="hamletForm.get('regionId')?.invalid && hamletForm.get('regionId')?.touched"
                        (change)="onRegionChange()">
                        <option value="">Select a region</option>
                        <option *ngFor="let region of regions" [value]="region.id">{{ region.name }}</option>
                      </select>
                      <div class="invalid-feedback" *ngIf="hamletForm.get('regionId')?.hasError('required')">
                        Region is required
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="districtId" class="form-label">District <span class="text-danger">*</span></label>
                      <select 
                        class="form-select" 
                        id="districtId"
                        formControlName="districtId"
                        [class.is-invalid]="hamletForm.get('districtId')?.invalid && hamletForm.get('districtId')?.touched"
                        (change)="onDistrictChange()">
                        <option value="">Select a district</option>
                        <option *ngFor="let district of filteredDistricts" [value]="district.id">{{ district.name }}</option>
                      </select>
                      <div class="invalid-feedback" *ngIf="hamletForm.get('districtId')?.hasError('required')">
                        District is required
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="wardId" class="form-label">Ward <span class="text-danger">*</span></label>
                      <select 
                        class="form-select" 
                        id="wardId"
                        formControlName="wardId"
                        [class.is-invalid]="hamletForm.get('wardId')?.invalid && hamletForm.get('wardId')?.touched"
                        (change)="onWardChange()">
                        <option value="">Select a ward</option>
                        <option *ngFor="let ward of filteredWards" [value]="ward.id">{{ ward.name }}</option>
                      </select>
                      <div class="invalid-feedback" *ngIf="hamletForm.get('wardId')?.hasError('required')">
                        Ward is required
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="villageId" class="form-label">Village <span class="text-danger">*</span></label>
                      <select 
                        class="form-select" 
                        id="villageId"
                        formControlName="villageId"
                        [class.is-invalid]="hamletForm.get('villageId')?.invalid && hamletForm.get('villageId')?.touched">
                        <option value="">Select a village</option>
                        <option *ngFor="let village of filteredVillages" [value]="village.id">{{ village.name }}</option>
                      </select>
                      <div class="invalid-feedback" *ngIf="hamletForm.get('villageId')?.hasError('required')">
                        Village is required
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="headquarters" class="form-label">Headquarters <span class="text-danger">*</span></label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="headquarters"
                        formControlName="headquarters"
                        [class.is-invalid]="hamletForm.get('headquarters')?.invalid && hamletForm.get('headquarters')?.touched"
                        placeholder="Enter headquarters">
                      <div class="invalid-feedback" *ngIf="hamletForm.get('headquarters')?.hasError('required')">
                        Headquarters is required
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

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="executiveOfficer" class="form-label">Executive Officer</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="executiveOfficer"
                        formControlName="executiveOfficer"
                        placeholder="Enter executive officer name">
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
                    placeholder="Enter hamlet description"></textarea>
                </div>

                <div class="d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-secondary" (click)="goBack()">
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    class="btn btn-primary" 
                    [disabled]="hamletForm.invalid || isLoading">
                    <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    {{ isLoading ? 'Saving...' : (isEditMode ? 'Update Hamlet' : 'Create Hamlet') }}
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
                <li>• Hamlet Name</li>
                <li>• Region</li>
                <li>• District</li>
                <li>• Ward</li>
                <li>• Village</li>
                <li>• Headquarters</li>
              </ul>

              <h6 class="mt-3">Optional Fields</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Population</li>
                <li>• Area (km²)</li>
                <li>• Coordinates (Latitude/Longitude)</li>
                <li>• Executive Officer</li>
                <li>• Description</li>
              </ul>

              <h6 class="mt-3">Tips</h6>
              <ul class="list-unstyled small text-muted">
                <li>• Select location hierarchy in order</li>
                <li>• Use official hamlet names</li>
                <li>• Headquarters should be the main settlement</li>
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
export class HamletFormComponent implements OnInit {
  hamletForm: FormGroup;
  isEditMode = false;
  hamletId: string | null = null;
  isLoading = false;
  regions: Region[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  villages: Village[] = [];
  filteredDistricts: District[] = [];
  filteredWards: Ward[] = [];
  filteredVillages: Village[] = [];

  constructor(
    private fb: FormBuilder,
    private hamletService: HamletService,
    private regionService: RegionService,
    private districtService: DistrictService,
    private wardService: WardService,
    private villageService: VillageService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.hamletForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      regionId: [null, [Validators.required]],
      districtId: [null, [Validators.required]],
      wardId: [null, [Validators.required]],
      villageId: [null, [Validators.required]],
      headquarters: ['', [Validators.required, Validators.maxLength(100)]],
      population: [null, [Validators.min(0)]],
      areaSqKm: [null, [Validators.min(0)]],
      latitude: [null],
      longitude: [null],
      executiveOfficer: ['', [Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      isActive: [true]
    });
  }

  ngOnInit() {
    this.loadRegions();
    this.loadDistricts();
    this.loadWards();
    this.loadVillages();
    
    this.route.paramMap.subscribe(params => {
      this.hamletId = params.get('uid');
      if (this.hamletId) {
        this.isEditMode = true;
        this.loadHamlet(this.hamletId);
      }
    });
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
    this.districtService.getAllDistricts(0, 1000).subscribe({
      next: (response: any) => {
        this.districts = response.data || [];
        this.filteredDistricts = this.districts;
      },
      error: (error: any) => {
        console.error('Error loading districts:', error);
      }
    });
  }

  loadWards() {
    this.wardService.getAllWards(0, 1000).subscribe({
      next: (response: any) => {
        this.wards = response.data || [];
        this.filteredWards = this.wards;
      },
      error: (error: any) => {
        console.error('Error loading wards:', error);
      }
    });
  }

  loadVillages() {
    this.villageService.getAllVillages(0, 1000).subscribe({
      next: (response: any) => {
        this.villages = response.data || [];
        this.filteredVillages = this.villages;
      },
      error: (error: any) => {
        console.error('Error loading villages:', error);
      }
    });
  }

  loadHamlet(uid: string) {
    this.isLoading = true;
    this.hamletService.getHamletByUid(uid).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status) {
          const hamlet = response.data;
          this.hamletForm.patchValue({
            name: hamlet.name,
            regionId: hamlet.regionId,
            districtId: hamlet.districtId,
            wardId: hamlet.wardId,
            villageId: hamlet.villageId,
            headquarters: hamlet.headquarters,
            population: hamlet.population,
            areaSqKm: hamlet.areaSqKm,
            latitude: hamlet.latitude,
            longitude: hamlet.longitude,
            executiveOfficer: hamlet.executiveOfficer,
            description: hamlet.description,
            isActive: hamlet.isActive
          });
          
          // Filter cascading dropdowns based on selected values
          this.onRegionChange();
          this.onDistrictChange();
          this.onWardChange();
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading hamlet:', error);
        this.toastService.error('Error Loading Hamlet', error.error?.message || error.message || 'Unknown error');
        this.goBack();
      }
    });
  }

  onRegionChange() {
    const selectedRegionId = this.hamletForm.get('regionId')?.value;
    
    if (selectedRegionId) {
      const selectedRegion = this.regions.find(r => r.id === Number(selectedRegionId));
      
      if (selectedRegion) {
        this.districtService.getDistrictsByRegionUid(selectedRegion.uid, 0, 1000).subscribe({
          next: (response: any) => {
            this.filteredDistricts = response.data || [];
            
            // Reset district selection if current selection is not in filtered list
            const currentDistrictId = this.hamletForm.get('districtId')?.value;
            if (currentDistrictId && !this.filteredDistricts.find(d => d.id === currentDistrictId)) {
              this.hamletForm.patchValue({ districtId: null });
              this.onDistrictChange();
            }
          },
          error: (error: any) => {
            console.error('Error loading districts for region:', error);
            this.filteredDistricts = [];
          }
        });
      }
    } else {
      this.filteredDistricts = this.districts;
      this.hamletForm.patchValue({ districtId: null });
      this.onDistrictChange();
    }
  }

  onDistrictChange() {
    const selectedDistrictId = this.hamletForm.get('districtId')?.value;
    
    if (selectedDistrictId) {
      const selectedDistrict = this.districts.find(d => d.id === Number(selectedDistrictId));
      
      if (selectedDistrict) {
        this.wardService.getWardsByDistrictUid(selectedDistrict.uid, 0, 1000).subscribe({
          next: (response: any) => {
            this.filteredWards = response.data || [];
            
            // Reset ward selection if current selection is not in filtered list
            const currentWardId = this.hamletForm.get('wardId')?.value;
            if (currentWardId && !this.filteredWards.find(w => w.id === currentWardId)) {
              this.hamletForm.patchValue({ wardId: null });
              this.onWardChange();
            }
          },
          error: (error: any) => {
            console.error('Error loading wards for district:', error);
            this.filteredWards = [];
          }
        });
      }
    } else {
      this.filteredWards = this.wards;
      this.hamletForm.patchValue({ wardId: null });
      this.onWardChange();
    }
  }

  onWardChange() {
    const selectedWardId = this.hamletForm.get('wardId')?.value;
    
    if (selectedWardId) {
      const selectedWard = this.wards.find(w => w.id === Number(selectedWardId));
      
      if (selectedWard) {
        this.villageService.getVillagesByWardUid(selectedWard.uid, 0, 1000).subscribe({
          next: (response: any) => {
            this.filteredVillages = response.data || [];
            
            // Reset village selection if current selection is not in filtered list
            const currentVillageId = this.hamletForm.get('villageId')?.value;
            if (currentVillageId && !this.filteredVillages.find(v => v.id === currentVillageId)) {
              this.hamletForm.patchValue({ villageId: null });
            }
          },
          error: (error: any) => {
            console.error('Error loading villages for ward:', error);
            this.filteredVillages = [];
          }
        });
      }
    } else {
      this.filteredVillages = this.villages;
      this.hamletForm.patchValue({ villageId: null });
    }
  }

  onSubmit() {
    if (this.hamletForm.valid) {
      this.isLoading = true;
      const formData = this.hamletForm.value;

      if (this.isEditMode && this.hamletId) {
        const updateRequest: UpdateHamletRequest = {
          name: formData.name,
          villageId: formData.villageId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };

        this.hamletService.updateHamlet(this.hamletId, updateRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Hamlet Updated', 'Hamlet updated successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error updating hamlet:', error);
            this.toastService.error('Error Updating Hamlet', error.error?.message || error.message || 'Unknown error');
          }
        });
      } else {
        const createRequest: CreateHamletRequest = {
          name: formData.name,
          villageId: formData.villageId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };

        this.hamletService.createHamlet(createRequest).subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Hamlet Created', 'Hamlet created successfully!');
              this.goBack();
            }
          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error creating hamlet:', error);
            this.toastService.error('Error Creating Hamlet', error.error?.message || error.message || 'Unknown error');
          }
        });
      }
    }
  }

  goBack() {
    this.router.navigate(['/hamlets']);
  }
}
