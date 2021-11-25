import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Song } from '../shared/song.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  url = "http://127.0.0.1:8000";
  constructor(private http: HttpClient) {

   }

   getData<T>(){
     return this.http.get<T>(this.url + "/songs");
   }

   deleteData(songId: string){
     return this.http.delete(this.url + "/songs/d/" + songId);
   }

   addData(params: {title: string, artist: string}){
     return this.http.post(this.url + "/songs", "test", {params:{title: params.title, artist: params.artist, lyrics: "You haven't entered any lyrics yet."}});
   }
}
