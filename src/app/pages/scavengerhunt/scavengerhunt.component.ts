import { Component } from '@angular/core'
import { Scavenger, scavenger } from 'src/app/quiz/scavenger'

@Component({
	selector: 'app-scavengerhunt',
	templateUrl: './scavengerhunt.component.html',
	styleUrls: ['./scavengerhunt.component.scss'],
})
export class ScavengerhuntComponent {
	scavengerhunts: Scavenger[] = scavenger

	revealAnswer: boolean = false
	currentHuntId: number = 0

	userHuntId: number = 0

	setCurrentHunt() {
		this.revealAnswer = false
		this.currentHuntId = this.userHuntId
	}

	toggleAnswer() {
		this.revealAnswer = !this.revealAnswer
	}

	parseInt(str: string) {
		return parseInt(str)
	}
}
