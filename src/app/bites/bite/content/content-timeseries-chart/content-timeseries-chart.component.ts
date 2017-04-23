import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContentChartComponent } from '../content-chart/content-chart.component';

// declare let c3: any;

@Component({
  selector: 'hxl-content-timeseries-chart',
  templateUrl: './content-timeseries-chart.component.html',
  styleUrls: ['./content-timeseries-chart.component.less']
})
export class ContentTimeseriesChartComponent extends ContentChartComponent implements OnInit, AfterViewInit {

  protected generateOptions(): {} {
    return {
      bindto: this.elementRef.nativeElement.children[0],
      data: {
        x: 'Date',
        columns: this.bite.values,
        type: 'line'
      },
      size: {
        height: 225
      },
      axis: {
        // rotated: true,
        x: {
          type: 'timeseries',
          tick: {
            count: 10,
            format: '%Y-%m-%d'
            // culling: {
            //   max: 4
            // }
          }
          // categories: this.bite.categories
        },
        y: {
          tick: {
            rotate: 30
          }
        }
      },
      point: {
        show: false
      }
    };
  }
}
