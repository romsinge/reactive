import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate  {
  
  canActivate(): Observable<boolean> {
    return this.auth.login().pipe(tap(isLoggedIn => {
      if (!isLoggedIn) {
        console.log('redirect')
        this.router.navigateByUrl('/login')
      }
    }))
  }

  constructor(private auth: AuthService, private router: Router) {}

}
