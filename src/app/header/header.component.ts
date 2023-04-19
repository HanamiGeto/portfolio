import { Component, HostListener } from '@angular/core';
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

  constructor(public router: Router) { }
  section: string;
  menuOpen: boolean = false;

  async scrollToSection(id: string) {
    // debugger;
    
    await this.router.navigate(['']);
    let el = document.getElementById(id);
    if (id === 'above-the-fold') {
      el.scrollIntoView({ block: 'end' });
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

  @HostListener('window:scroll', ['$event'])


  defineSection() {
    let startScreen: any = document.getElementById('above-the-fold')?.offsetTop;
    let aboutMe: any = document.getElementById('about-me')?.offsetTop;
    let mySkills: any = document.getElementById('skills')?.offsetTop;
    let portfolio: any = document.getElementById('portfolio')?.offsetTop;

    let section1: number = startScreen + window.innerHeight / 2;
    let section2: number = startScreen + aboutMe + window.innerHeight / 2;
    let section3: number = startScreen + aboutMe + mySkills - window.innerHeight / 2;
    let section4: number = startScreen + aboutMe + mySkills + portfolio - window.innerHeight;

    this.checkSection(section1, section2, section3, section4);
  }


  checkSection(section1: number, section2: number, section3: number, section4: number) {
    if (window.pageYOffset < section1) {
      this.section = '';
    }
    if (window.pageYOffset > section1) {
      this.section = 'about-me';
    }
    if (window.pageYOffset > section2) {
      this.section = 'skills';
    }
    if (window.pageYOffset > section3) {
      this.section = 'portfolio';
    }
    if (window.pageYOffset > section4) {
      this.section = '';
    }
  }
}
