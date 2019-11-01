import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';



@NgModule({
  declarations: [
    CreateContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
