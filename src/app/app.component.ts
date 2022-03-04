import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { user } from './dataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sparse-Technology';

  constructor() {}
  ngOnInit(): void {}
}
