import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../service/entry-list.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(private entriesService: EntryListService) { }

  entries: Array<object>  ;

  ngOnInit() {
    this.entriesService.getEntries()
      .subscribe(entries=>{
        this.entries = entries;
      });
  }

}
