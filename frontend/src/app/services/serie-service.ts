import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  serverUrl = 'http://localhost:8080/api/series';

  constructor(private httpClient: HttpClient) { }

  getSeries() {
    return this.httpClient.get(this.serverUrl);
  }

  createSerie(serie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(this.serverUrl, JSON.stringify(serie), { headers });
  }

  updateSerie(id: string, serie: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put(`${this.serverUrl}/${id}`, JSON.stringify(serie), { headers });
  }

  deleteSerie(id: any) {
    return this.httpClient.delete(`${this.serverUrl}/${id}`);
  }

  getSerieById(id: string) {
    return this.httpClient.get(`${this.serverUrl}/${id}`);
  }
}
