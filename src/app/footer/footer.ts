import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-footer',
  imports: [ MatToolbarModule, MatIconModule,RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
currentYear = new Date().getFullYear();
}
