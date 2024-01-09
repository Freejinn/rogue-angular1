import { Component } from '@angular/core';
import { Observable, filter, toArray } from 'rxjs';
import { InstructorListService } from 'src/app/Shared/Services/list.service';
import { Instructor } from 'src/app/Shared/models/instuctorInfo';
import { CommonModule, NgFor } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InstInfoComponent } from './inst-info/inst-info.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, NgFor, MatButtonModule]
})
export class ListComponent {
  constructor(private listService: InstructorListService, private dialog: MatDialog) {}
  isShowDiv = true;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  dialogRef: MatDialogRef<any, any> | undefined;

  instructorList$: Observable<Instructor> = this.listService.getList();

  advInstructor$: Observable<Instructor[]> = this.instructorList$.pipe(
    filter((instructor) => instructor.level === 'advanced'), toArray()
  );

  intInstructor$: Observable<Instructor[]> = this.instructorList$.pipe(
    filter((instructor)=>instructor.level === 'intermediate'), toArray()
  );

  appInstructor$: Observable<Instructor[]> = this.instructorList$.pipe(
    filter((instructor)=>instructor.level === 'apprentice'), toArray()
  );

  infoOpen(): void {
    this.dialogRef = this.dialog.open(InstInfoComponent, {
      maxWidth: '80vw',
      maxHeight: '83.25vh',
      data: {
        
      }
    });
  }
}
