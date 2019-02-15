import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'src/app/modules/login/login.module#LoginModule'
  },
  {
    path: 'admin',
    loadChildren: 'src/app/modules/admin/admin.module#AdminModule',
    canActivate: [ AdminGuard ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
