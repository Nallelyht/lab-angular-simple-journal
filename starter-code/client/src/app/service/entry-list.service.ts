import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryListService {

  url: string = 'http://localhost:3000/api/journal-entries/';

  constructor(private http: Http) { }

  getEntries(){
    return this.http.get(this.url).pipe(map((res: Response)=>res.json()));
  }

  getSingleEntry(id){
    return this.http.get(this.url + id).pipe(map((res: Response)=>res.json()));
  }
}
