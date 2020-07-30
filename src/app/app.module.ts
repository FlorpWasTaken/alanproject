import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LuigiComponent } from './luigi/luigi.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MemberComponent } from './members/member/member.component';
import { MoreInfoComponent } from './members/member/more-info/more-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { KeypadComponent } from './calculator/keypad/keypad.component';
import { RatingComponent } from './members/member/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LuigiComponent,
    MembersComponent,
    HomeComponent,
    FooterComponent,
    MemberComponent,
    MoreInfoComponent,
    CalculatorComponent,
    KeypadComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
