import { Injectable } from '@angular/core';
import usersData from '../assets/usersData.json';
import { user } from './dataModel';

interface users extends Array<user> {}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userInformation: users = [];
  constructor() {}

  getAllData() {
    usersData.map((data) => {
      this.userInformation.push(data);
    });
    return this.userInformation;
  }
}
