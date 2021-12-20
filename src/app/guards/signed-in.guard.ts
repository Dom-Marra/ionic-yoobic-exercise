import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.authService.getIsLoggedIn()) this.router.navigateByUrl("");
    return !this.authService.getIsLoggedIn();
  }
  
}
