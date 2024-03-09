import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES_NAMES } from './modules/shared/types/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES_NAMES.auth,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES_NAMES.auth,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        m => m.AuthModule
      ),
  },
  {
    path: APP_ROUTES_NAMES.mainPage,
    loadChildren: () =>
      import('./modules/main/main.module').then(
        m => m.MainModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
