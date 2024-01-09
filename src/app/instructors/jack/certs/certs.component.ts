import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Certs } from 'src/app/Shared/models/certs.model';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css'],
  imports: [MatDialogModule, MatButtonModule, MatCardModule, NgFor],
})
export class CertsComponent {
  certs: Certs[] = [
    {
      header: 'JKD and Filipino MA',
      imgPath: 'assets/images/Certs/2010.jpg',
      footer: 'Edged Weapons'
    },
    {
      header: 'Karate, Judo, Jiu Jitsu',
      imgPath: 'assets/images/Certs/2009.jpg',
      footer: '4th Degree Black Belt'
    },
    {
      header: 'JKD and Filipino MA',
      imgPath: 'assets/images/Certs/2008-law.jpg',
      footer: 'Law Enforcement Instructor'
    },
    {
      header: 'JKD and Filipino MA',
      imgPath: 'assets/images/Certs/2008-full.jpeg',
      footer: 'Senior Full Instructor'
    },
    {
      header: 'JKD and Filipino MA',
      imgPath: 'assets/images/Certs/2005.jpg',
      footer: 'Full Instructor'
    },
    {
      header: 'JKD and Filipino MA',
      imgPath: 'assets/images/Certs/2000.jpg',
      footer: 'Apprentice Instructor'
    }
  ];
}
