import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { QuizCompleteComponent } from './quiz-complete/quiz-complete.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [QuizComponent, Question1Component, Question2Component, Question3Component, Question4Component, Question5Component, QuizCompleteComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
  ]
})
export class QuizModule { }
