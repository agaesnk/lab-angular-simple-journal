import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../../services/api-connect.service';
import { ActivatedRoute } from '@angular/router';

 

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  
  journalEntries: Object;
  id: number;
  private sub: any;



  constructor(private api : ApiConnectService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.api.getJournalEntries()
      .then (data => this.journalEntries = data)
      })
    }
}
