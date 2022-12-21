import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QuizRoutingModule } from './quiz-routing.module'
import { QuizComponent } from './quiz.component'
import { QuestionComponent } from 'src/app/components/question/question.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [QuizComponent],
	imports: [CommonModule, QuizRoutingModule, QuestionComponent, FormsModule],
})
export class QuizModule {}
