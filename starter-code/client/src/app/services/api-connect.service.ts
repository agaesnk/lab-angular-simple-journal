import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

   journalEntriesURL = 'http://localhost:3000/api/journal-entries';
   singleEntryURL = 'http://localhost:3000/api/journal-entries/:id';


  constructor( private httpClient : HttpClient) { }

  getJournalEntries(){
   return this.httpClient.get(this.journalEntriesURL).toPromise();
  }

  getSingleEntry(id){
    return this.httpClient.get(`http://localhost:3000/api/journal-entries/${id}`).toPromise()
  }
}


