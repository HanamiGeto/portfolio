import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { isPlatformBrowser } from '@angular/common';
import { VisibilityService } from '../../shared/visibility.service';

@Component({
  selector: 'pf-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements AfterViewInit, OnDestroy {
  private intersectionObserver: IntersectionObserver | undefined;
  private platformId = inject(PLATFORM_ID);
  private visibilityService = inject(VisibilityService);
  private readonly _elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.IsOnScreen(this._elementRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private IsOnScreen(element: Element): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.visibilityService.setActiveComponent(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      this.intersectionObserver.observe(children[i]);
    }
  }
}
