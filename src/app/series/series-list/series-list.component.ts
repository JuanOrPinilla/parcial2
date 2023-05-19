import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  selectedSerie!: Series;
  selected = false;
  series: Array<Series> = [];
  avgSeasons : number = 0;

  onSelected(serie: Series): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  constructor(private serieService: SeriesService) { }
  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.avgSeasons = this.serieService.getAvgSeasons(series)
    });
  }


  ngOnInit() {
    this.getSeries();
  }

}
