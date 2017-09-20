import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { DisplayConfig, DisplayConfigInitialState } from './display-config';

@Component({
  selector: 'ag-results',
  templateUrl: './results.component.html',
  styleUrls: [ './results.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {

  params$: any;
  displayConfig: DisplayConfig = DisplayConfigInitialState;

  constructor(private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.displayConfig.display = params.get('display');
        this.displayConfig.term = params.get('term');
        this.displayConfig.page = +params.get('page');
        this.displayConfig.length = +params.get('length');
        this.displayConfig.sort = +params.get('sort');
        this.displayConfig.guid = params.get('guid');
      });
  }

}
