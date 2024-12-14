import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    const token = localStorage.getItem('accessToken');
    const newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
    return next(newReq);
  } else {
    return next(req);
  }
};
