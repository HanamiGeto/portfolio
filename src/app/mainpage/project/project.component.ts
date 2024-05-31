import { NgClass, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'pf-project',
  standalone: true,
  imports: [NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  projects = [
    {
      name: 'Join',
      technologies: 'HTML | CSS | JavaScript',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. Please use the guest login as it has already tasks and contacts.',
      picture: 'join',
      liveTest: 'join',
      github: 'join',
    },
    {
      name: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      description:
        'A simple Jump-and Run game basend on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      picture: 'polloloco',
      liveTest: 'el_pollo_locco',
      github: 'el-pollo-loco',
    },
    {
      name: 'Slack clone',
      technologies: 'Angular | TypeScript | Angular Material | Firebase | SCSS',
      description: 'An Angular based messaging app',
      picture: 'slackclone',
      liveTest: 'slack-clone',
      github: 'slack-clone',
    },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
