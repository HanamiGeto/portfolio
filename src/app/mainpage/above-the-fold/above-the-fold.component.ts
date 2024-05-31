import { Component, inject } from '@angular/core';
import { ScrollToElementIdService } from '../../shared/scroll-to-element-id.service';

@Component({
  selector: 'pf-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  scrollService = inject(ScrollToElementIdService);
}
