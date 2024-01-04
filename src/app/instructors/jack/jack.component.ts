import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CertsComponent } from './certs/certs.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-jack',
  templateUrl: './jack.component.html',
  styleUrls: ['./jack.component.css'],
  imports: [MatButtonModule, MatDialogModule]
})

export class JackComponent {
  constructor(public dialog: MatDialog) {}

  certsOpen(): void {
    this.dialog.open(CertsComponent);
  }
}
