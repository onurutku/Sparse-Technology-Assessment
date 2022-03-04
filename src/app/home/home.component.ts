import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    jQuery('#world-map').vectorMap();
  }
}
