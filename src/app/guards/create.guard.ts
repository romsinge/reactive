import { AdminComponent } from './../modules/admin/components/admin/admin.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateComponent } from '../components/create/create.component';

@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanDeactivate<CreateComponent> {
  
  canDeactivate(component: CreateComponent) {

    if (Object.values(component.contact).some(value => value)) {
      return confirm('Êtes-vous sûr de vouloir partir ?')
    }
    
    return true
    
  }

}
