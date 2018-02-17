import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  sum:number = 0;

  constructor(private _dataService: DataService) {

   }

  ngOnInit() {
    console.log("in ngOnInit");
    console.log("sum in init...", this.sum)
  }

}