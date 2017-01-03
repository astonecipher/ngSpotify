import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private _searchUrl: string;
    private _artistUrl: string;
    private _albumsUrl: string;

    constructor(private _http: Http) {
        console.log('Service Ready');
    }

    searchMusic(str: string, type: string = 'artist') {
        if (str.length > 0) {
            this._searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=us';
            return this._http.get(this._searchUrl)
                .map(res => res.json());
        }
    }

    getArtist(id: string) {
        this._artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this._artistUrl)
            .map(res => res.json());
    }
    
    getAlbums(artistId: string) {
        this._albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this._albumsUrl)
            .map(res => res.json());
    }
}
