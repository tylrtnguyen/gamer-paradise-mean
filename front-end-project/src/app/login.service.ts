import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient ) { }

  login(email, password) {
    return this.http.post<any>(`${this.uri}/admin/login`, {email, password});
  }

  update(name, email, password) {
    const admin_to_update = {
      name: name,
      email: email,
      password: password,
      date: Date.now()
    };
    return this.http.post(`${this.uri}/admin/login`, admin_to_update)
  }
}
