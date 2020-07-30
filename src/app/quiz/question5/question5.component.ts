import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/app.constants';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss']
})
export class Question5Component implements OnInit {
  questions = Quiz;
  questionObject: any = {};

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.setQuestion();
  }

  setQuestion() {
    let questions;
    this.quizService.refreshQuizData(null).subscribe(value => {
      questions = value;
    });
    this.questionObject = questions.find(item => item.id == 5);
  }

  onSelectionChange(value, index) {
    this.questionObject.option.forEach(data => {
      data.selected = false;
    })
    this.questionObject.option[index].selected = true
  }


  saveValue() {
    this.quizService.refreshQuizData(this.questionObject)
  }

}
