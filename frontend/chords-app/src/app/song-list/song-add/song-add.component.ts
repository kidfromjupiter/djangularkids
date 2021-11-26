import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiHttpService } from 'src/app/service/apihttp.service';
import { Song } from 'src/app/shared/song.model';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {
  @Output() modalCanceled = new EventEmitter<boolean>();
  @Output() songAdded = new EventEmitter<Song[]>();
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
  }

  onModalCanceled(){
    this.modalCanceled.emit(false);
  }

  addSong(form: NgForm){
    this.apiHttpService.addData(form.value).subscribe((data: any)=>{
      this.songAdded.emit(data);
      this.modalCanceled.emit(false);
    });
  }

}
