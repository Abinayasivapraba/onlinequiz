import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { QuizCompleteComponent } from './quiz-complete/quiz-complete.component';

const routes: Routes = [
  {
    path: "",
    component: QuizComponent,
    children: [
      {
        path: "question-1",
        component: Question1Component
      },
      {
        path: "question-2",
        component: Question2Component
      },
      {
        path: "question-3",
        component: Question3Component
      },
      {
        path: "question-4",
        component: Question4Component
      },
      {
        path: "question-5",
        component: Question5Component
      },
      {
        path: "complete",
        component: QuizCompleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
