import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CollapsePanelComponent } from './components/collapse-panel/collapse-panel.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { ChangeWidthDirective } from './directives/change-width.directive';

@NgModule({
  declarations: [
    CollapsePanelComponent,
    StartPageComponent,
    UserActionsComponent,
    ChangeWidthDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NzLayoutModule,
    NzCollapseModule,
    NzIconModule,
  ]
})
export class MainModule {}
