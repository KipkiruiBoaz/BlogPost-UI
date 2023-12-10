import { Injectable } from '@angular/core';
import { loginRequest } from './models/login-request.model';
import { Observable } from 'rxjs';
import { loginResponse } from './models/login-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(request:loginRequest):Observable<loginResponse>{
     return this.http.post<loginResponse>(`${environment.apiBaseUrl}/api/Auth/login`,{
      email:request.email,
      password:request.password
    })
  }
}
