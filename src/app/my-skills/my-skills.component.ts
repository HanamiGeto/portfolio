import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  icons = ['angular', 'typescript', 'javascript', 'html', 'firebase', 'git', 'css', 'rest-api', 'scrum', 'material-design'];
  name = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material Design'];
  
  ngOnInit(): void {
    AOS.init();
  }
}
