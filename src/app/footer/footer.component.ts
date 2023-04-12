import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public router: Router, private comp: HeaderComponent) { }

  public scrollToHead(id) {
    this.comp.scroll(id);
  }
}
