import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

  artist: any = {};
  topTracks: any = {};

  loadingArtist: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( res => {
      console.log('response ', res['id'] );
      this.getArtist( res['id'] );
      this.getTopTracks( res['id'] );
    });
  }

  getArtist( id: string ) {
    this.spotify.getArtist( id )
      .subscribe( artist => {
        console.log('Artista ', artist);
        this.artist = artist;
        this.loadingArtist = false;
      });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
      .subscribe( topTracks => {
        console.log('Top tracks', topTracks );
        this.topTracks = topTracks;
      });
  }
}
