interface ContactForm {
  name: string;
  email: string;
  message: string;
}

import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import AOS from 'aos';
import { FormErrorsComponent } from '../form-errors/form-errors.component';
import { customEmailValidator } from '../validators';
import { ScrollToElementIdService } from '../../shared/scroll-to-element-id.service';
import { FormValidationIconComponent } from '../form-validation-icon/form-validation-icon.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pf-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormErrorsComponent,
    FormValidationIconComponent,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  scrollService = inject(ScrollToElementIdService);
  private http = inject(HttpClient);
  private phpUrl = 'https://schneider-alexander.net/sendMail.php';
  messageSent = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, customEmailValidator],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  post = {
    endPoint: this.phpUrl,
    body: (payload: ContactForm) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isFieldValid(field: string): boolean | null {
    const control = this.form.get(field);
    return control && control.touched ? control.valid : null;
  }

  submitForm() {
    const formValue = this.form.getRawValue();

    const newMessage: ContactForm = {
      ...formValue,
    };

    this.messageSent = true;

    this.http.post(this.post.endPoint, this.post.body(newMessage)).subscribe({
      next: () => {
        this.form.reset();
        this.form.disable();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        setTimeout(() => {
          this.messageSent = false;
          this.form.enable();
        }, 1000);
      },
    });
  }
}
