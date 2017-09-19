import { Component } from '@angular/core';
import {HeaderConfig} from 'ag-vdl/src/app/test/header/header-config';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Does this work?';
  config: HeaderConfig = {
    color: '#18a3fa',
    size: '60px',
    align: 'center'
  };
}
