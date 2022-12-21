import { Component, OnInit } from '@angular/core'
import { Quiz, quiz } from 'src/app/quiz/quiz'

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
	quizes: Quiz[] = quiz

	nextQuestionNumber: number = 0

	controllerActive: boolean = true

	activeQuizId: number[] = [-1]

	ngOnInit(): void {}

	isAnswerCorrectCapture(event: any) {
		console.log(event)
		this.setControllerActive(true)
	}

	nextQuestion() {
		this.activeQuizId[0] = this.nextQuestionNumber - 1
		this.setControllerActive(false)
	}

	setControllerActive(value: boolean) {
		this.controllerActive = true
	}
}
