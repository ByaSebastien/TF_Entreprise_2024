import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const isAuthenticateGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);

  return !!authService.currentUser
};
