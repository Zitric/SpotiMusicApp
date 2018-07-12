import { Component} from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) { }

  search( term: string ) {

    if ( term ) {
      this.loading = true;
      this.spotify.getArtist( term )
        .subscribe( ( res: any ) => {
          this.artists = res;
          this.loading = false;
        });
    }
  }

}
