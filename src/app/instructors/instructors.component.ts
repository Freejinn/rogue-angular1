import { Component } from '@angular/core';
import { JackComponent } from './jack/jack.component';
import { CertsComponent } from './jack/certs/certs.component';
import { ListComponent } from './list/list.component';

@Component({
  standalone: true,
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
  imports: [JackComponent, CertsComponent, ListComponent]
})
export class InstructorsComponent {

}
