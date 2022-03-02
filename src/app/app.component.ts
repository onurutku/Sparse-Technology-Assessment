import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { user } from './dataModel';

interface users extends Array<user> {}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sparse-Technology';
  userInfo = <users>[];
  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.userInfo = this.data.getAllData();
  }
  sortBy(what: string) {}
}
