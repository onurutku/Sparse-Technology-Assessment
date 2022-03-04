import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  filterWord: string;
  constructor(private data: DataService) {}

  ngOnInit(): void {}
  onKeyUp() {
    this.data.filter.next(this.filterWord);
  }
}
