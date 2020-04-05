import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  selectedState: any = [
    {code: 'ND', users: 324, 'org type': 'Service Provider'},
    {code: 'WA', users: 454, 'org type': 'Manufacturer'},
    {code: 'AZ', users: 234, 'org type': 'Service Provider'},
    {code: 'AK', users: 544, 'org type': 'Manufacturer'},
    {code: 'CT', users: 544, 'org type': 'Manufacturer'},
    {code: 'DC', users: 544, 'org type': 'Manufacturer'},
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
