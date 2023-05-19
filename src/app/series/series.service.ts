import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Series } from './series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) {}
  getSeries(): Observable<Series[]> {
  return this.http.get<Series[]>(this.apiUrl);
  }
  getAvgSeasons(series: Array<Series>): number{
    let avgSeasons: number = 0;
    series.forEach((serie) => avgSeasons = avgSeasons + serie.seasons);
    avgSeasons = avgSeasons/series.length;
    return avgSeasons;
  }
}
