import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import { ContactComponent } from './components/contacts/contacts.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactAddComponent } from './components/contact-item-add/contact-add.component';
import { HeaderComponent } from './components/layouts/header.component';
import { AppRoutingModule }     from './app-routing.module';
import { ContactDetailComponent } from './components/contact-details/contact-details.component';
import { PageNotFoundComponent } from './components/errorpages/404.component';
@NgModule({
  declarations: [
    AppComponent,
   PageNotFoundComponent,
    ContactComponent,
    ContactItemComponent,
    ContactAddComponent,
    HeaderComponent,
    ContactDetailComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/