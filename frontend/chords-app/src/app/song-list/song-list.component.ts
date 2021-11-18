import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: [{artist:string, name: string}] = [
    {artist: "Paul McCartney", name: "Yesterday"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
