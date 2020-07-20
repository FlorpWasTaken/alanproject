import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MembersComponent} from './members/members.component';
import {LuigiComponent} from './luigi/luigi.component';
import {CalculatorComponent} from './calculator/calculator.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'members', component: MembersComponent},
  { path: 'luigi', component: LuigiComponent},
  { path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
