import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiHttpService } from 'src/app/service/apihttp.service';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {
  @Output() modalCanceled = new EventEmitter<boolean>();
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
  }

  onModalCanceled(){
    this.modalCanceled.emit(false);
  }

  addSong(form: NgForm){
    this.apiHttpService.addData(form.value).subscribe();
  }

}
