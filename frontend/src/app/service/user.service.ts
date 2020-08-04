import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/users';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(data): Observable<any> {
    return this.http.post(url, data);
  }
  editUser(id, data): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }
  deleteUser(id): Observable<any> {
    return this.http.delete(`${url}/${id}`, httpOptions);
  }
  getUser(id): Observable<any> {
    return this.http.get(`${url}/${id}`, httpOptions);
  }
  getAllUsers(data): Observable<any> {
    return this.http.post(`${url}/all`, data, httpOptions);
  }
}
