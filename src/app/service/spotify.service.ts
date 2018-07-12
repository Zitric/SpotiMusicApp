import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery ( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAJeqppCCqWto36dIxkW-V1EdYJ_1eqdUoKatXJ97Ftff5iDAAYYEcX1XC62EyL8NNCV6I40XdXzcRBFWM'
    });

    return this.http.get( url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( res => res['albums'].items ));
  }


  getArtist( term: string ) {

    return this.getQuery( `search?q=${ term }&type=artist&limit=15`)
      .pipe( map( res => res['artists'].items ));
  }
}
