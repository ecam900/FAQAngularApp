import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

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

   getQuestions(){
     return this.questions;
   }

}
