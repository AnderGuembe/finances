import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movement } from '../model/movement.model';
import { Observable } from 'rxjs';
import { Page, Pageable } from '../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private readonly http: HttpClient) { }

  getMovements(pageable: Pageable, isIncome: boolean): Observable<Page<Movement>> {
     let httpParams = new HttpParams();

    Object.entries(pageable).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value);
      }
    });
    httpParams = httpParams.set('isIncome', isIncome.toString());
    return this.http.get<Page<Movement>>(`/api/movement`, { params: httpParams });
  }

  createMovement(movement: Movement): Observable<Movement> {
    return this.http.post<Movement>('/api/movement', movement);
  }
}
