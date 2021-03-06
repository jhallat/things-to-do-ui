import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashAlt, faClone, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { IdeaListComponent } from './ideas/idea-list/idea-list.component';
import { IdeaInputComponent } from './ideas/idea-input/idea-input.component';
import { IdeaItemComponent } from './ideas/idea-item/idea-item.component';
import { LogonComponent } from './logon/logon.component';
import { HomeComponent } from './home/home.component';
import { BacklogInputComponent } from './backlog/backlog-input/backlog-input.component';
import { BacklogListComponent } from './backlog/backlog-list/backlog-list.component';
import { BacklogItemComponent } from './backlog/backlog-item/backlog-item.component';
import { TodaysListInputComponent } from './todays-list/todays-list-input/todays-list-input.component';
import { TodaysListItemComponent } from './todays-list/todays-list-item/todays-list-item.component';
import { TodaysListContainerComponent } from './todays-list/todays-list-container/todays-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaInputComponent,
    IdeaItemComponent,
    LogonComponent,
    HomeComponent,
    BacklogInputComponent,
    BacklogListComponent,
    BacklogItemComponent,
    TodaysListInputComponent,
    TodaysListItemComponent,
    TodaysListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'logon', component: LogonComponent},
      { path: '', redirectTo: 'logon', pathMatch: 'full'},
      { path: '**', redirectTo: 'logon', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronCircleRight, faClone, faTrashAlt);
  }
}
