import { Component,HostListener  } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CapitalizeFirstPipe } from '../shared/pipes/capitalize-first.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterLinkActive,CommonModule,RouterLink,MatIconModule,MatListModule, MatButtonModule, MatMenuModule,  MatCardModule,MatSidenavModule,  CapitalizeFirstPipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
 isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10; // threshold for shadow + blur
  }


//   constructor(private viewportScroller: ViewportScroller) {}
//   showHeader: boolean = true;
// selectedItem: string | null = null;

  // public scrollToSection(sectionId: string): void {
  //   const element = document.getElementById(sectionId)!;
  //   const navElement = document.getElementsByTagName('header')[0]!;

  //   const navHeight = navElement.offsetHeight;

  //   const targetPosition = element.getBoundingClientRect().top + window.scrollY;

  //   this.viewportScroller.scrollToPosition([0, targetPosition - navHeight]);
  // }
}
