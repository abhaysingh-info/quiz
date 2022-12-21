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
		this.setControllerActive(true)
	}

	nextQuestion() {
		this.activeQuizId[0] = this.nextQuestionNumber - 1
		this.setControllerActive(false)
	}

	changeQuestionOnEnterPress(event: any) {
		if (
			parseInt(event.target.value) > 0 &&
			parseInt(event.target.value) < this.quizes.length
		) {
			this.nextQuestion()
		}
	}

	setControllerActive(value: boolean) {
		this.controllerActive = true
	}

	isRecursiveMoreThan5Times: number = 0
	getRandomQuiz() {
		const maxIndex: number = this.quizes.length
		const lastActiveQuizId: number = this.activeQuizId[0]

		this.activeQuizId[0] = Math.floor(Math.random() * maxIndex)

		// checking if current active quiz was same as last one or not.
		if (
			this.activeQuizId[0] === lastActiveQuizId &&
			this.isRecursiveMoreThan5Times < 30
		) {
			this.isRecursiveMoreThan5Times += 1
			this.getRandomQuiz()
		}
		this.isRecursiveMoreThan5Times = 0
	}
}
