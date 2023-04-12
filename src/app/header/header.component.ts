import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class HeaderComponent {

  constructor(public router: Router) {}
  section: string;
  menuOpen: boolean = false;

  public scroll(id: string) {
    let el = document.getElementById(id);
    this.section = id;
    if (id === 'above-the-fold') {
      el.scrollIntoView({block: 'end'});
    } else {
      el.scrollIntoView();
    }
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }


  closeMenu() {
    this.menuOpen = false;
  }
}
