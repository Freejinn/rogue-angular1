import { Component } from '@angular/core';
import { JackComponent } from './jack/jack.component';
import { CertsComponent } from './jack/certs/certs.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
  imports: [JackComponent, CertsComponent, ListComponent, CommonModule]
})
export class InstructorsComponent {

}
