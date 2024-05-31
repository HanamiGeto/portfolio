import { Component, input } from '@angular/core';

@Component({
  selector: 'pf-form-validation-icon',
  standalone: true,
  imports: [],
  templateUrl: './form-validation-icon.component.html',
  styleUrl: './form-validation-icon.component.scss',
})
export class FormValidationIconComponent {
  isValid = input.required<boolean | null>();

  get iconSrc(): string {
    if (this.isValid() === null) {
      return '';
    }
    return this.isValid() ? '/assets/img/valid.svg' : '/assets/img/invalid.svg';
  }
}
