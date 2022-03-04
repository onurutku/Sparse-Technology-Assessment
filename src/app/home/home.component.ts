import { Component, OnInit } from '@angular/core';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { DataService } from '../data.service';
import { user } from '../dataModel';
declare var $: any;
declare var jQuery: any;
interface users extends Array<user> {}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo = <users>[];
  coordinates: any = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.userInfo = this.data.getAllData();
    this.userInfo.forEach((element) => {
      const lt = Number(element.latlng.split(',')[0]);
      const lng = Number(element.latlng.split(',')[1]);
      const mark = {
        name: element.country,
        coords: [lt, lng],
      };
      this.coordinates.push(mark);
    });
    console.log(this.coordinates);
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
          render: (marker) => marker.name,
        },
      },

      markersSelectable: true,
      selectedMarkers: markers.map((marker, index) => {
        var name = marker.name;

        if (name === 'Russia' || name === 'Brazil') {
          return index;
        }
      }),
      markers: markers,
      markerStyle: {
        initial: { fill: '#5c5cff' },
        selected: { fill: '#ff5050' },
      },
      markerLabelStyle: {
        initial: {
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: 13,
        },
      },
    });
  }
}
