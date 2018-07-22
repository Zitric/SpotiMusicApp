import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery ( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCDe-juRwOUYwjcjbtZOAN1hjvxo7vevGHdZAMz94YdLoqHM_ZWkvw35CQPTGvr8WpIBXHNjBt-wMNE1MY'
    });

    return this.http.get( url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( res => res['albums'].items ));
  }


  getArtists( term: string ) {

    return this.getQuery( `search?q=${ term }&type=artist&limit=15`)
      .pipe( map( res => res['artists'].items ));
  }

  getArtist( id: string ) {

    return this.getQuery( `artists/${ id }`);
      // .pipe( map( res => res['artists'].items ));
  }

  getTopTracks( id: string ) {

    return this.getQuery( `artists/${ id }/top-tracks?country=us`)
      .pipe( map( res => res['tracks']));
  }
}
