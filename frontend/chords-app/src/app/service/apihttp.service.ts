import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Song } from '../shared/song.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  url = "http://127.0.0.1:8000/songs";
  constructor(private http: HttpClient) {

   }

   getData<T>(){
     return this.http.get<T>(this.url);
   }
}
