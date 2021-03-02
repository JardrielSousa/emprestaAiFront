import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/model/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanServiceService {
  baseUrl = `${environment.url}v1/loan`;

  constructor(private http: HttpClient) {}

  create(loan: any): Observable<any> {
    console.log(loan);
    return this.http.post<any>(this.baseUrl, loan);
  }
  read(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
