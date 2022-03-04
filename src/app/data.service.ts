import { Injectable } from '@angular/core';
import { Subject, zip } from 'rxjs';
import usersData from '../assets/usersData.json';
import { user } from './dataModel';

interface users extends Array<user> {}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userInformation = <users>[];
  filter = new Subject<string>();
  constructor() {}

  getAllData() {
    this.userInformation = [];
    usersData.map((data) => {
      this.userInformation.push(data);
    });
    return this.userInformation;
  }
}
