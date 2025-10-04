import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  PoliticalParty, 
  CreatePoliticalPartyRequest, 
  UpdatePoliticalPartyRequest, 
  PoliticalPartyStats 
} from '../models/political-party.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  getAllPoliticalParties(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties`, { params });
  }

  getPoliticalPartyById(id: number): Observable<ApiResponse<PoliticalParty>> {
    return this.http.get<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/${id}`);
  }

  getPoliticalPartyByUid(uid: string): Observable<ApiResponse<PoliticalParty>> {
    return this.http.get<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/uid/${uid}`);
  }

  getPoliticalPartyByCode(code: string): Observable<ApiResponse<PoliticalParty>> {
    return this.http.get<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/code/${code}`);
  }

  getPoliticalPartyByName(name: string): Observable<ApiResponse<PoliticalParty>> {
    return this.http.get<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/name/${name}`);
  }

  getPoliticalPartyByAbbreviation(abbreviation: string): Observable<ApiResponse<PoliticalParty>> {
    return this.http.get<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/abbreviation/${abbreviation}`);
  }

  getActivePoliticalParties(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties/active`, { params });
  }

  getRegisteredPoliticalParties(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties/registered`, { params });
  }

  getOperationalPoliticalParties(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties/operational`, { params });
  }

  searchPoliticalParties(searchTerm: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('q', searchTerm)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties/search`, { params });
  }

  getPoliticalPartiesByFoundingYear(year: number, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties/founding-year/${year}`, { params });
  }

  getPoliticalPartiesByIdeology(ideology: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<PoliticalParty>> {
    const params = new HttpParams()
      .set('ideology', ideology)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<PoliticalParty>>(`${this.API_URL}/political-parties/ideology`, { params });
  }

  createPoliticalParty(request: CreatePoliticalPartyRequest): Observable<ApiResponse<PoliticalParty>> {
    return this.http.post<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties`, request);
  }

  updatePoliticalParty(id: number, request: UpdatePoliticalPartyRequest): Observable<ApiResponse<PoliticalParty>> {
    return this.http.put<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/${id}`, request);
  }

  updatePoliticalPartyByUid(uid: string, request: UpdatePoliticalPartyRequest): Observable<ApiResponse<PoliticalParty>> {
    return this.http.put<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/uid/${uid}`, request);
  }

  deletePoliticalParty(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/political-parties/${id}`);
  }

  deletePoliticalPartyByUid(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/political-parties/uid/${uid}`);
  }

  activatePoliticalParty(id: number): Observable<ApiResponse<PoliticalParty>> {
    return this.http.patch<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/${id}/activate`, {});
  }

  deactivatePoliticalParty(id: number): Observable<ApiResponse<PoliticalParty>> {
    return this.http.patch<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/${id}/deactivate`, {});
  }

  registerPoliticalParty(id: number): Observable<ApiResponse<PoliticalParty>> {
    return this.http.patch<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/${id}/register`, {});
  }

  deregisterPoliticalParty(id: number): Observable<ApiResponse<PoliticalParty>> {
    return this.http.patch<ApiResponse<PoliticalParty>>(`${this.API_URL}/political-parties/${id}/deregister`, {});
  }

  getPoliticalPartyStats(): Observable<ApiResponse<PoliticalPartyStats>> {
    return this.http.get<ApiResponse<PoliticalPartyStats>>(`${this.API_URL}/political-parties/stats`);
  }
}
