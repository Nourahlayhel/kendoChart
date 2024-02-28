import { Component, OnInit } from '@angular/core';
import { KendoChartService } from './kendo-chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'webApp';
  constructor(public kendoChartService: KendoChartService) {}

  ngOnInit() {
    this.kendoChartService.getChartData();
  }
}
