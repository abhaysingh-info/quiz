import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ScavengerhuntRoutingModule } from './scavengerhunt-routing.module'
import { ScavengerhuntComponent } from './scavengerhunt.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [ScavengerhuntComponent],
	imports: [CommonModule, ScavengerhuntRoutingModule, FormsModule],
})
export class ScavengerhuntModule {}
