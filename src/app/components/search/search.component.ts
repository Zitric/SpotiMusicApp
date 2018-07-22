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
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService ) {

    this.error = false;

  }

  search( term: string ) {

    if ( term ) {
      this.loading = true;
      this.spotify.getArtists( term )
        .subscribe( ( res: any ) => {
          this.artists = res;
          this.loading = false;
        }, ( err ) => {
          this.error = true;
          this.errorMessage = err.error.error.message;
          this.loading = false;
        });
    }
  }

}
