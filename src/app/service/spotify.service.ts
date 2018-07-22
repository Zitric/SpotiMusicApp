import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery ( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCpQA03qHOfjb-GvDwma3ZX_HSmDZT4e2zR2O6XaGh9JC-2qlw-whYoFrPfXFtUtPrZtWJ4qepN4uqlGWQ'
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


  getTokenFromSpotify() {

    const url = 'https://spotifygeneratetoken.herokuapp.com/get_token';
    const client_id = '9777c1ce6c704f2bba13aaecb01cf1f0';
    const client_secret = 'ccf0e21f14354f1e85099893080dd3e5';
    const grant_type = 'client_credentials';

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const data = JSON.stringify ({
      client_id: client_id,
      client_secret: client_secret,
      grant_type: grant_type

    });

    console.log('url', url);
    console.log('data', data);
    console.log('headers', headers);

    return this.http.post( url, data, { headers })
      .pipe( map( res => {
        return 'Bearer ' + res['_body'];
      }));

    // return this.http.post(url, data, { headers })
      // .map( res => {
        // const token = JSON.stringify({
        //   token: 'Bearer ' + res['_body'],
        //   time: new Date()
        // });
        //
        // if (window.localStorage) {
        //   localStorage['spotifyToken'] = token;
        // }
        // return res;
        // return 'Bearer ' + res['_body'];
       // });
  }
}
