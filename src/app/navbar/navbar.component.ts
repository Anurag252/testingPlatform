import { Component, OnInit, OnChanges, SimpleChange,Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    timeLeft : number ;
  constructor() { 
    
  }

    myTimer()
  {
    console.log(this.timeLeft);
    this.timeLeft = this.timeLeft - 1;
  }

  ngOnInit() {
   this.timeLeft = 100;
   var timer =  setInterval(this.myTimer, 1000);
  }

  setInterval()
  {

  }

}
