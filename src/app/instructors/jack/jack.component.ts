import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CertsComponent } from './certs/certs.component';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-jack',
  templateUrl: './jack.component.html',
  styleUrls: ['./jack.component.css'],
  imports: [MatButtonModule, MatDialogModule]
})

export class JackComponent {
  dialogRef: MatDialogRef<any, any> | undefined;

  constructor(public dialog: MatDialog) {}

  certsOpen(): void {
    this.dialogRef = this.dialog.open(CertsComponent, {
      maxWidth: '80vw',
      maxHeight: '83.25vh',
      height: '100%',
      width: '100%',
    });
  }
}
