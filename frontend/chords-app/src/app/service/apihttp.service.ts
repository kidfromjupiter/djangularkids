import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Song } from '../shared/song.model';

@Injectable({
  providedIn: 'root'
})
export class apiHttpService {
  url = "http://127.0.0.1:8000/songs";
  constructor(private http: HttpClient) {

   }

   getSongs(){
     return this.http.get<Song[]>(this.url);
   }
}
