import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { user } from '../dataModel';

interface users extends Array<user> {}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  usersData = <users>[];
  pagination = <users>[];
  totalPage: number;
  currentPage: number = 0;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.pagination = this.data.getAllData();
    console.log(this.pagination);
    this.totalPage = Math.ceil(this.data.userInformation.length / 6);
    for (let i = this.currentPage * 6; i < 6 * (this.currentPage + 1); i++) {
      if (i < this.pagination.length) {
        this.usersData.push(this.pagination[i]);
      } else {
        return;
      }
    }
  }
  initData() {
    this.usersData = [];
    for (let i = this.currentPage * 6; i < 6 * (this.currentPage + 1); i++) {
      if (i < this.pagination.length) {
        this.usersData.push(this.pagination[i]);
      } else {
        return;
      }
    }
  }
  pageUp() {
    if (this.currentPage < Math.floor(this.totalPage)) {
      this.currentPage++;
      this.initData();
    }
  }
  pageDown() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.initData();
    }
  }
}
