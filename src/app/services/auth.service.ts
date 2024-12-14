import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface AuthResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signin(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(environment.apiUrl + '/auth/signin', {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('accessToken', response.accessToken);
          this.router.navigate(['/dashboard']);
        }),
        catchError((error) => {
          console.error('Login error: ', error);
          return throwError(() => error);
        })
      );
  }

  register(
    name: string,
    email: string,
    password: string
  ): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(environment.apiUrl + '/auth/signup', {
        name,
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('accessToken', response.accessToken);
          this.router.navigate(['/dashboard']);
        }),
        catchError((error) => {
          console.error('Login error: ', error);
          return throwError(() => error);
        })
      );
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
