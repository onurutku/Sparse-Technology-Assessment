import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { user } from '../dataModel';
interface users extends Array<user> {}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  userInfo = <users>[];
  hamData = <users>[];
  sortCounter: boolean = false;
  totalPage: number;
  currentPage: number = 0;
  incomingFilterWord: string = '';
  subs: Subscription;

  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.hamData = this.data.getAllData();
    this.totalPage = Math.ceil(this.hamData.length / 10);

    for (let i = this.currentPage * 10; i < 10 * (this.currentPage + 1); i++) {
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
    for (let i = this.currentPage * 10; i < 10 * (this.currentPage + 1); i++) {
      if (i < this.hamData.length) {
        this.userInfo.push(this.hamData[i]);
      } else {
        return;
      }
    }
  }
  sortBy(what: string) {
    if (!this.sortCounter) {
      this.userInfo.sort((a, b) => {
        if (a[what] > b[what]) return 1;
        if (a[what] < b[what]) return -1;
        return 0;
      });
      this.sortCounter = true;
    } else {
      this.userInfo.sort((a, b) => {
        if (a[what] > b[what]) return -1;
        if (a[what] < b[what]) return 1;
        return 0;
      });
      this.sortCounter = false;
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
