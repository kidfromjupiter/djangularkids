import { Component, OnInit } from '@angular/core';
import { apiHttpService } from '../service/apihttp.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[] = [
    {id: "1", artist: "Paul McCartney", title: "Yesterday", lyrics: "bla", date_of_creation:"12"}
  ];
  constructor(private songService: apiHttpService) { }

  ngOnInit(): void {
    this.songService.getData<Song[]>().subscribe((data: Song[])=>{
      this.songs = data;
    })
  }

}
