import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  PlusCircleOutline,
  CloseCircleOutline
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  PlusCircleOutline,
  CloseCircleOutline
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    NzLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzIconModule.forChild(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
