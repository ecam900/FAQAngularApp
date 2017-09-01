import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Object[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My favorite color is red',
        hide:true
      },
      {
        text: 'What is your favorite color?',
        answer: 'Blue',
        hide:true
      },
      {
        text: 'What is your favorite food?',
        answer: 'Pizza',
        hide:true
      }
    ];
    
    }

  ngOnInit() {
  }

}
