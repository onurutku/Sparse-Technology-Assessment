import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPipe,
    CardsComponent,
    HomeComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
