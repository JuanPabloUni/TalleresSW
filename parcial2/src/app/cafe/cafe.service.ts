import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cafe } from './cafe';
import { environment } from 'src/environments/environment';
import { CafeDetail } from './cafe-detail';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

private apiUrl = environment.baseUrl + 'cafes.json';

constructor(private http: HttpClient) { }

getCafes(): Observable<CafeDetail[]> {
  return this.http.get<CafeDetail[]>(this.apiUrl);
}

}
