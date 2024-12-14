import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  name: string;
  email: string;
}

type MeResponse = {
  user: User;
};

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$: Observable<any> = this.userSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getMe(): Observable<any> {
    this.isLoadingSubject.next(true);

    return this.http.get<MeResponse>(environment.apiUrl + '/users/me').pipe(
      map((data) => data.user),
      tap((user) => {
        this.userSubject.next(user);
      }),
      catchError((error) => {
        console.error('Error fetching user data:', error);
        return throwError(() => error);
      }),
      finalize(() => {
        this.isLoadingSubject.next(false);
      })
    );
  }

  getUser() {
    return this.userSubject.value;
  }
}
