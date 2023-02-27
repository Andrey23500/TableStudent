import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableFormModule } from './modules/table-form/table-form.module';
import { routing } from "./app.routing";
import { StudentService } from './service/student.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableFormModule,
    MaterialModule,
    routing,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  entryComponents: [
    AddEditComponent,
    DeleteComponent,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
