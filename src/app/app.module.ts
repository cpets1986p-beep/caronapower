import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {  AppRoutingModule } from './app.routes';
@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
        MatMenuModule,
    MatCardModule,
        MatIcon,
    HttpClientModule,
    AppRoutingModule,
    MatCardContent
  ]
})
export class AppModule {}

