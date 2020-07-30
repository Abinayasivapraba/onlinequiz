import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-complete',
  templateUrl: './quiz-complete.component.html',
  styleUrls: ['./quiz-complete.component.scss']
})
export class QuizCompleteComponent implements OnInit {
  selectedAnswers = [];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.setQuestion();
  }

  setQuestion() {
    this.quizService.refreshQuizData(null).subscribe(value => {
      this.selectedAnswers = value;
    });
  }

}
