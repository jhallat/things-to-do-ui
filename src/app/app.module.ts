import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { BacklogComponent } from './backlog/backlog.component';
import { TodaysListComponent } from './todays-list/todays-list.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaInputComponent } from './idea-input/idea-input.component';

@NgModule({
  declarations: [
    AppComponent,
    BacklogComponent,
    TodaysListComponent,
    IdeaListComponent,
    IdeaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
