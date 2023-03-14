import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  icons = ['angular', 'typescript', 'javascript', 'html', 'firebase', 'git', 'css', 'rest-api', 'scrum', 'material-design'];
  name = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material Design'];
  // name = [];

  // constructor() {
  //   for (let i = 0; i < this.icons.length; i++) {
  //     const name = this.icons[i];
  //     if (name == 'html' || name == 'git' || name == 'css') {
  //       this.name.push(name.toUpperCase());
  //     } else if (name == 'typescript' || name == 'javascript') {
  //       this.name.push(this.capitalizeFirstAndFifthLetter(name));
  //     } else if (name.includes('-')) {

  //     } else {
  //       this.name.push(this.capitalizeFirstLetter(name))
  //     }
  //   }
  // }

  // capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  // capitalizeFirstAndFifthLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1, 4) + string.charAt(4).toUpperCase() + string.slice(5);
  // }

}
