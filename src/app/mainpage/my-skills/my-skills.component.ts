import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import AOS from 'aos';
import { ScrollToElementIdService } from '../../shared/scroll-to-element-id.service';

@Component({
  selector: 'pf-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  scrollService = inject(ScrollToElementIdService);

  icons = [
    'angular',
    'typescript',
    'javascript',
    'html',
    'firebase',
    'git',
    'css',
    'rest-api',
    'scrum',
    'material-design',
  ];
  name = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material Design',
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
