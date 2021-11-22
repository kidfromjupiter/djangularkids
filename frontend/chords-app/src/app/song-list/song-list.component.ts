import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../service/apihttp.service';
import { SongsService } from '../service/songs.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[] = [
    {id: "1", artist: "Paul McCartney", title: "Yesterday", lyrics: "bla", date_of_creation:"12"},
    {id: "2141", artist: "The Beatles", title: "All my loving", lyrics: "Close your eyes and I'll kiss you Tomorrow I'll miss you Remember I'll always be true And then while I'm away, I'll write home everyday And I'll send all my loving to you", date_of_creation:"15.7.1985"}];
  constructor(private apiHttpService: ApiHttpService, private songsService: SongsService) { }

  ngOnInit(): void {
    this.apiHttpService.getData<Song[]>().subscribe((data: Song[])=>{
      this.songs = data;
    })
  }

  onSongSelected(song: Song){
    this.songsService.songSelected.emit(song);
  }

}
