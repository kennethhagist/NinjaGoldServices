import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  place: any;

  ngOnInit() {
  }

  domath(name: string, min, max){
    this.place = this._dataService.Gold(name, min, max);
  }

}