import { Component, OnInit } from '@angular/core';
import {featuredData} from './featuredData';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  featuredSites: any;

  ngOnInit() {
    this.featuredSites = featuredData;
  }

}
