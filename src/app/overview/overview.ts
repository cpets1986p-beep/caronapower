import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {  CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [MatCardModule,CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {

}
