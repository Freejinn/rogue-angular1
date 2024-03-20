import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogContainer, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [
    MatDialogContainer,
    MatDialogContent,
    ReactiveFormsModule,
    HttpClient,
  ],
})
export class SignUpComponent {

  emailForm!: FormGroup;
  userName: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  message: FormControl = new FormControl('', Validators.required);
  honeypot: FormControl = new FormControl('');
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string = '';

  value = '';

  constructor(
    private builder: FormBuilder, 
    private http: HttpClient,
    public dialogRef: MatDialogRef<any>
    ) {
    this.emailForm = this.builder.group({
      userName: this.userName,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot,
    });
  }

  submitForm() {
    if (this.emailForm.status == 'VALID' && this.honeypot.value == '') {
      this.emailForm.disable();
      const formData: any = new FormData();
      formData.append('userName', this.emailForm.get('userName')?.value);
      formData.append('email', this.emailForm.get('email')?.value);
      formData.append('message', this.emailForm.get('message')?.value);
      this.isLoading = true;
      this.submitted = false;
      this.http
        .post(
          'https://script.google.com/macros/s/AKfycbwCnVJEMRrYOkhafo5CxdQvnFwd-VkNW5KXhHSpActtAcbKUPsqwns_cQZXzUDmwtWe/exec',
          formData
        )
        .subscribe(
          (response) => {
            if ((response = 'success')) {
              this.responseMessage =
                "Thanks for the message! I'll back to you soon.";
            } else {
              this.responseMessage =
                'Oops! Somthing went wrong... Reload the page and try again.';
            }
            this.emailForm.enable();
            this.submitted = true;
            this.isLoading = false;
            console.log(response);
          },
          (error) => {
            this.responseMessage =
              'Oops! An error occurred... Reload the page and try again.';
            this.emailForm.enable();
            this.submitted = true;
            this.isLoading = false;
            console.log(error);
          }
        );
    }
  }

 onClick(): void {
  this.dialogRef.close()
 }
}
