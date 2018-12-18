import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarCustomComponent } from './nav-bar-custom/nav-bar-custom.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksComponent } from './books/books.component';
import { AnimesComponent } from './animes/animes.component';
import { FilmsComponent } from './films/films.component';
import { MangasComponent } from './mangas/mangas.component';
import { GamesComponent } from './games/games.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarCustomComponent,
    RoutingComponent,
    WelcomePageComponent,
    LoginComponent,
    NotFoundComponent,
    BooksComponent,
    AnimesComponent,
    FilmsComponent,
    MangasComponent,
    GamesComponent,
    OtherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
