import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newTracks: any [] = [];

  constructor( private spotify: SpotifyService ) {

    this.spotify.getNewReleases()
      .subscribe( (response: any) => {
        console.log( response );
        this.newTracks = response;
      });
  }

  ngOnInit() {
  }

}
