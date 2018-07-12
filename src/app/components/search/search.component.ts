import { Component} from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artists: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  search( term: string ) {
    console.log( term );
    this.spotify.getArtist( term )
      .subscribe( ( response: any ) => {
        console.log( response );
        this.artists = response;
      });
  }

}
