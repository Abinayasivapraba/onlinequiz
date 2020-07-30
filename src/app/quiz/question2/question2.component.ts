import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/app.constants';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {
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
    this.questionObject = questions.find(item => item.id == 2);
    }

  onSelectionChange(value, index) {
    this.questionObject.option.forEach(data =>{
      data.selected = false;
    })
    this.questionObject.option[index].selected = true
  }


  saveValue() {
    this.quizService.refreshQuizData(this.questionObject)
  }

}
