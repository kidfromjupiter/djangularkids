import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Song } from '../shared/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  songSelected = new EventEmitter<Song>();
  constructor() { }
}
