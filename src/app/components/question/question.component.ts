import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Quiz } from 'src/app/quiz/quiz'

@Component({
	selector: 'app-question',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
	@Input() quiz: Quiz | any

	optionSelected: number = 0

	answerCorrect: boolean | undefined = undefined

	@Output() isAnswerCorrect: EventEmitter<boolean | undefined> =
		new EventEmitter<boolean | undefined>(undefined)

	ngOnInit(): void {}

	setIsAnswerCorrect(value: boolean | undefined) {
		this.answerCorrect = value
		this.isAnswerCorrect.emit(value)
	}

	checkAnswer() {
		if (this.optionSelected === 0) return
		this.setIsAnswerCorrect(this.optionSelected === this.quiz?.correctOption)
	}
}
