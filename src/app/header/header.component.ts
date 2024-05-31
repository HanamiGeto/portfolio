import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { VisibilityService } from '../shared/visibility.service';
import { ScrollToElementIdService } from '../shared/scroll-to-element-id.service';

@Component({
  selector: 'pf-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('250ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  private visibilityService = inject(VisibilityService);
  scrollService = inject(ScrollToElementIdService);
  private document = inject(DOCUMENT);
  menuOpen = false;
  burgerMenuSource = 'assets/img/burger-menu-open.svg';
  activeComponent = '';

  constructor() {
    this.visibilityService
      .getActiveComponent()
      .subscribe((component: string) => {
        this.activeComponent = component;
      });
  }

  toggleBurgerMenuSource(open: boolean): void {
    open
      ? (this.burgerMenuSource = 'assets/img/burger-menu-closed.svg')
      : (this.burgerMenuSource = 'assets/img/burger-menu-open.svg');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.toggleBurgerMenuSource(this.menuOpen);
    if (this.menuOpen) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = '';
    }
  }
}
