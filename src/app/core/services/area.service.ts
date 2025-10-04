import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Area, 
  AreaType, 
  AreaStats 
} from '../models/area.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  getAllAreas(page: number = 0, size: number = 20, sortBy: string = 'code', sortDir: string = 'asc'): Observable<PageResponse<Area>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Area>>(`${this.API_URL}/areas`, { params });
  }

  getAreaByUid(uid: string): Observable<ApiResponse<Area>> {
    return this.http.get<ApiResponse<Area>>(`${this.API_URL}/areas/uid/${uid}`);
  }

  getAreaByCode(code: string): Observable<ApiResponse<Area>> {
    return this.http.get<ApiResponse<Area>>(`${this.API_URL}/areas/code/${code}`);
  }

  getAreasByType(areaType: AreaType, page: number = 0, size: number = 20, sortBy: string = 'code', sortDir: string = 'asc'): Observable<PageResponse<Area>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Area>>(`${this.API_URL}/areas/type/${areaType}`, { params });
  }

  searchAreas(searchTerm: string, page: number = 0, size: number = 20, sortBy: string = 'code', sortDir: string = 'asc'): Observable<PageResponse<Area>> {
    const params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Area>>(`${this.API_URL}/areas/search`, { params });
  }

  searchAreasByType(areaType: AreaType, searchTerm: string, page: number = 0, size: number = 20, sortBy: string = 'code', sortDir: string = 'asc'): Observable<PageResponse<Area>> {
    const params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Area>>(`${this.API_URL}/areas/type/${areaType}/search`, { params });
  }

  getAreaStats(): Observable<ApiResponse<AreaStats>> {
    return this.http.get<ApiResponse<AreaStats>>(`${this.API_URL}/areas/stats`);
  }

  getAreaByTypeAndId(areaType: AreaType, areaId: number): Observable<ApiResponse<Area>> {
    return this.http.get<ApiResponse<Area>>(`${this.API_URL}/areas/type/${areaType}/area/${areaId}`);
  }
}
