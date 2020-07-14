import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MembersComponent} from './members/members.component';
import {LuigiComponent} from './luigi/luigi.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'members', component: MembersComponent},
  { path: 'luigi', component: LuigiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
