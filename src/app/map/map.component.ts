import { Component, OnInit } from '@angular/core';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { DataService } from '../data.service';
import { user } from '../dataModel';
declare var $: any;
declare var jQuery: any;
interface users extends Array<user> {}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  userInfo = <users>[];
  coordinates: any = [];
  filter: any = [];
  markers: any;
  incomingFilterWord: number | string;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.userInfo = this.data.getAllData();
    // this.filterMap(35);
    this.generateMapPoints();
    this.generateMap();
    this.data.filter.subscribe((data) => {
      this.incomingFilterWord = data;
      if (this.incomingFilterWord == '') {
        this.generateMapPoints();
      } else {
        this.filterMap(this.incomingFilterWord);
      }
      this.generateMap();
    });
  }
  generateMapPoints() {
    $('#map').empty();
    const newArr = [];
    this.userInfo.forEach((element?) => {
      const lt = Number(element.latlng.split(',')[0]);
      const lng = Number(element.latlng.split(',')[1]);
      const mark = {
        name: element.country,
        coords: [lt, lng],
        age: element.age,
        style: { r: 5, fill: element.color },
      };
      newArr.push(mark);
    });
    this.coordinates = newArr;
  }
  filterMap(filter: number | string) {
    $('#map').empty();
    const newArr = [];
    this.userInfo.forEach((element?) => {
      const lt = Number(element.latlng.split(',')[0]);
      const lng = Number(element.latlng.split(',')[1]);
      if (element.age == filter) {
        const mark = {
          name: element.country,
          coords: [lt, lng],
          age: element.age,
          style: { r: 5, fill: element.color },
        };
        newArr.push(mark);
      }
    });
    this.coordinates = newArr;
  }

  generateMap(): void {
    let markers = this.coordinates;
    const map = new jsVectorMap({
      map: 'world',
      selector: '#map',
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: '#d1d5db',
        },
      },

      labels: {
        markers: {
          render: (marker) => marker.name + ` (${marker.age})`,
        },
      },

      markersSelectable: true,
      // selectedMarkers: markers.map((marker, index) => {
      //   var name = marker.name;
      //   console.log(index);
      //   // if (name === 'Russia' || name === 'Brazil') {
      //   //   return index;
      //   // }
      // }),
      markers: markers,
      markerStyle: {
        initial: { fill: 'blue' },
        selected: { fill: 'black' },
      },
      markerLabelStyle: {
        initial: {
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 10,
        },
      },
    });
  }
}
