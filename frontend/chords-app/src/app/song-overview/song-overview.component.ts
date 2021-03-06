import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../service/apihttp.service';
import { SongsService } from '../service/songs.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-song-overview',
  templateUrl: './song-overview.component.html',
  styleUrls: ['./song-overview.component.css']
})
export class SongOverviewComponent implements OnInit {
  song?: Song;
  lyrics_overview: string = "";
  constructor(private songsService: SongsService, private apiHttpService: ApiHttpService) { 
    this.songsService.songSelected.subscribe((data: Song)=>{
      this.song = {id: data.id, artist: data.artist, title: data.title, lyrics: data.lyrics, date_of_creation: data.date_of_creation}
      this.lyrics_overview = data.lyrics.substr(0, 200) + "...";
    });

  }

  deleteSong(songId: string){
    this.apiHttpService.deleteData(songId).subscribe();
  }

  ngOnInit(): void {
    
  }

}
