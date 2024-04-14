import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginVerifyService } from './login-verify.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private loginService: LoginVerifyService, private router: Router) { }

  canActivate(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
