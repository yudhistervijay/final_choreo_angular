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
      Authorization: 'Basic cnozSnJkbTE0SWh5VTJyR2RRRXc4Tmx2Yl9vYTpfb0Y5SHljRDB0YVpQNm5yaUZNXzN3aTMwa0tNdHpLU2xGOGVNRDVGTVdRYQ==',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}