import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  serverUrl ='http://localhost:8080/api/series';

  constructor(private httpClient: HttpClient) { }

  getSeries() {
    return this.httpClient.get(this.serverUrl);
  }

  createSerie(serie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append('title', serie.title);
    body.append('genre', serie.genre);

    return this.httpClient.post(this.serverUrl, body.toString(), { headers });
  }
}
