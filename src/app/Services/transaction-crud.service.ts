import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionCrudService {
  private apiUrl = 'http://localhost:8000/api/transaction';
  httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any> {
    return this.http.get<any>(this.apiUrl,this.httpOptions);
  }

  getTransaction(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`,this.httpOptions);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`,this.httpOptions);
  }
}
