import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public jsonValue : string ='[{"option1":"Is it true1"},{"option1":"Is it true2"},{"option1":"Is it true3"}]'


public options : any = JSON.parse(this.jsonValue);
  constructor() { }

  ngOnInit() {
  }

}
