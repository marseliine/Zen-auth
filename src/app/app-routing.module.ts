import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/core/guards/login.guard';
import { UserGuard } from 'src/core/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/main/main.module').then((m) => m.MainModule),
    canActivate: [UserGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
