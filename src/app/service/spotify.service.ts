import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDDdXMkS5dnuOFkmgYbe2LH-0NpZ0ZrqdIA9BgPqEYaKq2bO9atLnHTtGg6NVJ67r8s1o2S5yuK4LNqnwY'
    });

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=15`, { headers })
      .pipe( map( response => {
        return response['albums'].items;
      }));
  }

  getArtist( term: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDDdXMkS5dnuOFkmgYbe2LH-0NpZ0ZrqdIA9BgPqEYaKq2bO9atLnHTtGg6NVJ67r8s1o2S5yuK4LNqnwY'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${{ term }}&type=artist&limit=15`, { headers })
      .pipe( map( response => {
        return response['artists'].items;
      }));

  }
}
