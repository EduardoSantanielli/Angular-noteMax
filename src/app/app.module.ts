import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
