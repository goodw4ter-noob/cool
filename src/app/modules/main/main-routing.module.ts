import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrganizationComponent } from './components/organization/organization.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
        children: [
          {
            path: '',
            component: ProfileComponent,
          },
          {
            path: 'userSettings',
            component: ProfileComponent,
          },
          {
            path: 'organization',
            component: OrganizationComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
