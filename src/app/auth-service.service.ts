import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    const url = 'https://api.asgardeo.io/t/vijaytech/oauth2/token';
    const headers = {
      Authorization: 'Basic QWpxTmhSZkJuZlk5ekNmOUNhcEJGa2JLQ3BjYTpwMElWSE9qS3FJOWpMeHA1ZTA3dWhWSmp6REFkZlVIVUg2OGFrdUpreHNvYQ==',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}