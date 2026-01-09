import { Component, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header';
import { Footer} from './footer/footer';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Overview } from './overview/overview';
import { Products } from './products/products';
import { Services } from './services/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header,Footer,MatIconModule, MatCardModule,  MatSidenavModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'caronaapp';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
    iconRegistry.addSvgIcon('location', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/location.svg'));
  }
}
