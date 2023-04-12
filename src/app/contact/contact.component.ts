import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import AOS from "aos";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;
  messageSent: boolean;

  public messageForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ], []),
    email: new FormControl('', [
      Validators.email,
      // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.required
    ], []),
    message: new FormControl('', [
      Validators.required
    ], []),
  })

  ngOnInit(): void {
    AOS.init();
  }

  async sendMail() {
    this.disableInputFields();

    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('mail', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);

    await fetch('https://alexander-schneider.developerakademie.net/send_mail/send_mail_portfolio.php',
      {
        method: 'POST',
        body: fd
      }
    );

    this.confirmAndClear();
  }


  /**
   * The function shows a confirmation for the user that the mail has been sent and clears all input fields.
   */
  confirmAndClear() {
    this.showConfirmation();

    setTimeout(() => {
      this.enableInputFields();
      this.messageForm.reset({ name: '', email: '', message: '' });
      this.hideConfirmation();
    }, 2000);
  }


  /**
   * The function disables all input field and the submit button.
   */
  disableInputFields() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButton.nativeElement.disabled = true;
  }


  /**
   * The function enables all input fields and the submit button.
   */
  enableInputFields() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }


  /**
   * The function shows the confirmation that the mail was sent. It therefore checks the html of the button to select the correct
   * language.
   */
  showConfirmation() {
    this.messageSent = true;
    let sendButton = (document.getElementById('sendButton') as HTMLButtonElement);
    // if (sendButton.innerHTML == 'Send message :)') {
    //   sendButton.innerHTML = 'Message sent!';
    // }
    if (this.messageSent) {
      sendButton.style.display = 'none';
    }
  }


  /**
   * The function hides the confirmation that the mail was sent. It therefore checks the html of the button to select the correct
   * language.
   */
  hideConfirmation() {
    this.messageSent = false;
    let sendButton = (document.getElementById('sendButton') as HTMLButtonElement);
    if (!this.messageSent) {
      sendButton.style.display = 'unset';
    }
  }
}
