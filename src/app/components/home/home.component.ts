import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newTracks: any [] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;
  token: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (res: any) => {
        this.newTracks = res;
        this.loading = false;
      }, ( err ) => {
        this.error = true;
        this.errorMessage = err.error.error.message;
        this.loading = false;
      });

    this.spotify.getTokenFromSpotify()
      .subscribe( res => {
        console.log('token ', res );
      });
    // this.spotify.getTokenFromSpotify();
  }

  ngOnInit() {
  }

}
