import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'quiz',
		loadChildren: () =>
			import('./pages/quiz/quiz.module').then((m) => m.QuizModule),
	},
	{
		path: 'scavengerhunt',
		loadChildren: () =>
			import('./pages/scavengerhunt/scavengerhunt.module').then(
				(m) => m.ScavengerhuntModule,
			),
	},
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
