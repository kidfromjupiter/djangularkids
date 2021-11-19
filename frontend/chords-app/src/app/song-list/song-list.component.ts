import { Component, OnInit } from '@angular/core';
import { SongService } from '../service/song.service';
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
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs().subscribe((data)=>{
      this.songs = data;
    })
  }

}
