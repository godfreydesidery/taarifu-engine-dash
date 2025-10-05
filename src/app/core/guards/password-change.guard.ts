import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard that checks if the user needs to change their password
 * If requirePasswordChange is true, redirect to password change page
 */
@Injectable({
  providedIn: 'root'
})
export class PasswordChangeGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const currentUser = this.authService.getCurrentUser();
    
    if (currentUser && currentUser.requirePasswordChange) {
      // User needs to change password, redirect to password change page
      this.router.navigate(['/change-password']);
      return false;
    }
    
    // User doesn't need to change password, allow access
    return true;
  }
}
