import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dialogRef: MatDialogRef<any> | undefined;

  constructor(private dialog: MatDialog){}

  signUpOpen(): void {
    this.dialogRef = this.dialog.open(SignUpComponent, {
      maxWidth: '80vw',
      maxHeight: '83.25vh',
      panelClass: 'dialog-container',
    });
  }
}
