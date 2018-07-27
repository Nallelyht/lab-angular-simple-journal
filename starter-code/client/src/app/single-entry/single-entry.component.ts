import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryListService } from '../service/entry-list.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  constructor(
    private entriesService: EntryListService,
    private activatedRoute: ActivatedRoute
  ) { }

  id: any;
  entrie: Object = {};

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params=>{
        this.id = params.id;
        this.entriesService.getSingleEntry(this.id)
          .subscribe(entry=>{
            this.entrie = entry;
          });
      });
  }

}
