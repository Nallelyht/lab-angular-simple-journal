import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryListService } from './service/entry-list.service';

import {routes} from './routes';
import { SingleEntryComponent } from './single-entry/single-entry.component'

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [
    EntryListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
