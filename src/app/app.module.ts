import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LuigiComponent } from './luigi/luigi.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MemberComponent } from './members/member/member.component';
import { MoreInfoComponent } from './members/member/more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LuigiComponent,
    MembersComponent,
    HomeComponent,
    FooterComponent,
    MemberComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
