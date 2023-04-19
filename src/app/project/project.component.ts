import { Component, OnInit } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      name: 'Join',
      technologies: 'HTML | CSS | JavaScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. Please use the guest login as it has already tasks and contacts.',
      picture: 'join',
      liveTest: 'join',
      github: 'join'
    },
    {
      name: 'El Pollo Loco',
      technologies: 'HTML | CSS | JavaScript',
      description: 'A simple Jump-andRun game basend on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      picture: 'polloloco',
      liveTest: 'el_pollo_locco',
      github: 'el-pollo-loco'
    },
    {
      name: 'Pokedex',
      technologies: 'HTML | CSS | JavaScript | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      picture: 'pokedex',
      liveTest: 'pokedex',
      github: 'pokedex'
    }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
