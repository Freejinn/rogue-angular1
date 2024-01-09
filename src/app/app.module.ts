import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ListComponent } from './instructors/list/list.component';
import { JackComponent } from './instructors/jack/jack.component';
import { CertsComponent } from './instructors/jack/certs/certs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { InstInfoComponent } from './instructors/list/inst-info/inst-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgramsComponent,
    AboutComponent,
    CarouselComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    JackComponent,
    CertsComponent,
    InstructorsComponent,
    ListComponent,
    CommonModule,
    InstInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
