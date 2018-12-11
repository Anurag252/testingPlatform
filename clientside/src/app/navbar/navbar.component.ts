import { Component, OnInit, OnChanges, SimpleChange,Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public  timeLeftinSeconds : number = 5 ;
  public  timeLeftinMinutes: number = 2 ;
  public  timeLeftinHours : number = 0 ; 
  timer: any;
  that : any = this;
  
  constructor() { 
   
    /*setInterval(() => {
      this.timeLeftinSeconds = this.timeLeftinSeconds - 1;
    },1000);

    setInterval(() => {
      this.timeLeftinMinutes = this.timeLeftinMinutes - 1;
    },60000);

    setInterval(() => {
      this.timeLeftinHours = this.timeLeftinHours - 1;
    },3600000);*/

   this.timer = setInterval(this.myTimer.bind(this)  , 1000);
  }

    myTimer()
  {
   
    
    if(this.timeLeftinHours == 0 && this.timeLeftinMinutes == 0 && this.timeLeftinSeconds == 0)
    {
      clearInterval(this.timer);
      return;
    }


    if(this.timeLeftinSeconds ==  0 )
    {
     
      this.timeLeftinSeconds =  60;
      if(this.timeLeftinMinutes > 0)
      this.timeLeftinMinutes = this.timeLeftinMinutes - 1;
    }
   else if(this.timeLeftinMinutes == 0)
    {
      if(this.timeLeftinHours > 0)
      {
      this.timeLeftinMinutes = 59;
      
      this.timeLeftinHours = this.timeLeftinHours - 1;
      }
     
    }

    if(this.timeLeftinSeconds > 0)
    this.timeLeftinSeconds = this.timeLeftinSeconds - 1;
  }

  ngOnInit() {
   
  }



}
