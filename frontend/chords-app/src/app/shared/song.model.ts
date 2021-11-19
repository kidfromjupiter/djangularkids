export class Song {
    id:string;
    title:string;
    artist:string;
    lyrics:string;
    date_of_creation:string;
    
    constructor(id:string, title:string, artist:string, lyrics:string, date_of_creation:string){
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.lyrics = lyrics;
        this.date_of_creation = date_of_creation;
    }

}