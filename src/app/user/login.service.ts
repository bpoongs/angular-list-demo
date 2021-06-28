import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  register(userData: User): Observable<User>{
    return this.http.post<User>(this.baseUrl + '/register', userData);
  }

  login(userData: User): Observable<User>{
    return this.http.post<User>(this.baseUrl + '/authenticate', userData);
  }
}
