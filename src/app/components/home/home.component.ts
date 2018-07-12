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

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe( (res: any) => {
        this.newTracks = res;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
