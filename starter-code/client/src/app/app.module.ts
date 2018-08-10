import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ApiConnectService } from './services/api-connect.service';

import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'list',  component: EntryListComponent },
  { path: 'list/:id', component: SingleEntryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ApiConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
