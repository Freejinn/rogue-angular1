import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AboutComponent } from './about/about.component';
import { CertsComponent } from './instructors/jack/certs/certs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'about', component: AboutComponent,},
  {path: 'certs', component: CertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
