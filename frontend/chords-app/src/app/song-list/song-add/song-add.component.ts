import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {
  @Output() modalCanceled = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onModalCanceled(){
    this.modalCanceled.emit(false);
  }

}
