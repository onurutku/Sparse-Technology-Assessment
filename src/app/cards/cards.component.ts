import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { user } from '../dataModel';

interface users extends Array<user> {}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  userInfo = <users>[];
  hamData = <users>[];
  totalPage: number;
  currentPage: number = 0;
  incomingFilterWord: string;
  subs: Subscription;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.hamData = this.data.getAllData();
    this.totalPage = Math.ceil(this.hamData.length / 6);
    for (let i = this.currentPage * 6; i < 6 * (this.currentPage + 1); i++) {
      if (i < this.hamData.length) {
        this.userInfo.push(this.hamData[i]);
      } else {
        return;
      }
    }
    this.subs = this.data.filter.subscribe((data) => {
      this.incomingFilterWord = data;
      if (this.incomingFilterWord == '') {
        this.initData();
      } else {
        this.userInfo = [];
        this.userInfo = this.data.getAllData();
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  initData() {
    this.userInfo = [];
    for (let i = this.currentPage * 6; i < 6 * (this.currentPage + 1); i++) {
      if (i < this.hamData.length) {
        this.userInfo.push(this.hamData[i]);
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
