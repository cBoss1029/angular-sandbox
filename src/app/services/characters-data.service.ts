import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersDataService {
  private marvelApiUrl = "https://gateway.marvel.com:443/v1/public/"

  constructor(private http: HttpClient) { 
  }
  getCharactersList() {
    return this.http.get(`${this.marvelApiUrl}characters?apikey=${environment.marvelApiKey}`);
  }
  getCharacterDetails(id: string) {
    return this.http.get(`${this.marvelApiUrl}characters/${id}?apikey=${environment.marvelApiKey}`);
  }
}
