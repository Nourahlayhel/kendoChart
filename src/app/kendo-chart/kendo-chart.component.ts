import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ChartModel } from '../models/chartModel';

@Component({
  standalone: true,
  imports: [CommonModule, ChartsModule],
  selector: 'app-kendo-chart',
  templateUrl: './kendo-chart.component.html',
  styleUrls: ['./kendo-chart.component.scss'],
})
export class KendoChartComponent {
  @Input() chartData: ChartModel | null = null;
  @Input() chartText: string = '';

  categories: string[] = [];

  ngOnInit() {
    this.categories = this.chartData?.series[0].data.map((d) => d.x) ?? [];
  }
}
