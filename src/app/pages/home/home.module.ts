import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { SearchContactComponent } from './components/search-contact/search-contact.component';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    CreateContactComponent,
    EditContactComponent,
    SearchContactComponent,
    DeleteContactComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
