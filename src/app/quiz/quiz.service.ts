import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Quiz } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizData = new ReplaySubject<any>(1);
  quizQuestions = Quiz;
  quizArray = [];

  constructor() { }


  refreshQuizData(questionObj): Observable<any> {
    this.quizArray = [];
    if (questionObj) {
      this.quizQuestions.forEach(data => {
        if (data.id == questionObj.id) {
          this.quizArray.push({
            id: questionObj.id,
            question: questionObj.question,
            option: questionObj.option.map(item => {
              return {
                optionid: item.optionid,
                name: item.name,
                selected: item.selected
              }
            })
          })
        }
        else if (data.id != questionObj.id) {
          this.quizArray.push({
            id: data.id,
            question: data.question,
            option: data.option.map(item => {
              return {
                optionid: item.optionid,
                name: item.name,
                selected: item.selected
              }
            })
          })
        }
      })
      this.quizData.next(this.quizArray);
    }
    else if (!questionObj) {
      this.quizArray = Object.assign([], this.quizQuestions)
      this.quizData.next(this.quizArray);
    }
    else {
      this.quizData.next(false);
    }
    return this.quizData.asObservable();

  }

}
