import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScavengerhuntComponent } from './scavengerhunt.component';

const routes: Routes = [{ path: '', component: ScavengerhuntComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScavengerhuntRoutingModule { }
