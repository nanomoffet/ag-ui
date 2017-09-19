import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ag-test-account',
  templateUrl: './test-account.component.html',
  styleUrls: ['./test-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
