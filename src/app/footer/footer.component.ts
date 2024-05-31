import { Component, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { ScrollToElementIdService } from '../shared/scroll-to-element-id.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pf-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scrollService = inject(ScrollToElementIdService);
}
