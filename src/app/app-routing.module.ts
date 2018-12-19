import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimesComponent } from './animes/animes.component';
import { FilmsComponent } from './films/films.component';
import { BooksComponent } from './books/books.component';
import { MangasComponent } from './mangas/mangas.component';
import { GamesComponent } from './games/games.component';
import { OtherComponent } from './other/other.component';
import { LoginComponent } from './login/login.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: WelcomePageComponent },
    { path: 'anime', component: AnimesComponent },
    { path: 'anime/:id', component: AnimeDetailComponent },
    { path: 'film', component: FilmsComponent },
    { path: 'book', component: BooksComponent },
    { path: 'manga', component: MangasComponent },
    { path: 'game', component: GamesComponent },
    { path: 'other', component: OtherComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
    LoginComponent,
    WelcomePageComponent,
    AnimesComponent,
    AnimeDetailComponent,
    FilmsComponent,
    BooksComponent,
    MangasComponent,
    GamesComponent,
    OtherComponent,
    NotFoundComponent
];
