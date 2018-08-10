import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../../services/api-connect.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  journalSingleEntry: Object;
  id: number;
  private sub: any;



  constructor(private api : ApiConnectService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.api.getSingleEntry(this.id)
      .then (data => this.journalSingleEntry = data)
      })
    }
}
