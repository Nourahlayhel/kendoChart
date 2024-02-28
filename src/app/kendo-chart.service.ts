import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ChartModel } from './models/chartModel';

@Injectable({
  providedIn: 'root',
})
export class KendoChartService {
  private readonly baseUrl = environment.apiUrl;

  chartDataSource = new BehaviorSubject<ChartModel | null>(null);
  chartData$ = this.chartDataSource.asObservable();

  set chartData(data: ChartModel) {
    this.chartDataSource.next(data);
  }

  constructor(private httpClient: HttpClient) {}

  getChartData() {
    this.httpClient
      .get<ChartModel>(this.baseUrl + '/chart')
      .pipe(take(1))
      .subscribe((chartModel: any) => {
        this.chartData = chartModel;
      });
  }
}
