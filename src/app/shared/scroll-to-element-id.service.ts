import { ViewportScroller } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollToElementIdService {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  scrollToSection(id: string) {
    if (this.router.url === '/imprint') {
      this.router.navigate(['/']);
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(id);
      }, 500);
    } else {
      this.viewportScroller.scrollToAnchor(id);
    }
  }
}
