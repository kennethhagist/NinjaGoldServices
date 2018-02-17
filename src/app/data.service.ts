import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  ninjaGold: number[] = [];
  sender: String = "";
  messages: string[] = [];
  sum: number = 0;
  rand: number;

  constructor() { }

  Gold(name:string, min, max){
    console.log("min and max", min, max)
    console.log('In farmGold - data.service');
    this.rand = Math.floor(Math.random() * (max-min+1) + min);

    this.ninjaGold.push(this.rand);
    console.log("getting Gold--", this.rand);
    this.sum += this.rand;
    console.log("sum", this.sum);
    this.displayMessage(name, this.rand);
    return this.rand;
  }

  displayMessage(name:string, num:number){
    if(num<0){
      this.messages.push("You lost " + num + " gold at the " + name);
    }else{
      this.messages.push("You earned " + num + " gold at the " + name);
    }
  }

}
