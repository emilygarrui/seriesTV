import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie-service';

@Component({
  selector: 'app-my-series',
  templateUrl: './my-series.page.html',
  styleUrls: ['./my-series.page.scss'],
  standalone: false,
})
export class MySeriesPage implements OnInit {

  series: any = [];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getAllSeries();
  }

  ionViewWillEnter() {
    this.getAllSeries();
  }

  getAllSeries() {
    this.serieService.getSeries().subscribe(response => {
      this.series = response;
    });
  }

  deleteSerie(id: any) {
    this.serieService.deleteSerie(id).subscribe(() => {
      this.getAllSeries();
    });
  }
}
