import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { ChangeWidthDirective } from './directives/change-width.directive';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProfileComponent } from './components/profile/profile.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { ActionsButtonsComponent } from './components/actions-buttons/actions-buttons.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    StartPageComponent,
    UserActionsComponent,
    ChangeWidthDirective,
    UserProfileComponent,
    UserSettingsComponent,
    ProfileComponent,
    OrganizationComponent,
    ActionsButtonsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NzLayoutModule,
    NzCollapseModule,
    NzIconModule,
    NzUploadModule,
    NzModalModule,
    NzDividerModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
})
export class MainModule {}
