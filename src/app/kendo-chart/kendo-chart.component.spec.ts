import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoChartComponent } from './kendo-chart.component';

describe('KendoChartComponent', () => {
  let component: KendoChartComponent;
  let fixture: ComponentFixture<KendoChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KendoChartComponent]
    });
    fixture = TestBed.createComponent(KendoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
