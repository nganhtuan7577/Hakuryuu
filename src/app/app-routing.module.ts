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

export const path = {
    home: 'home',
    anime: 'anime',
    animeDetail: 'anime/:id',
    film: 'film',
    manga: 'manga',
    book: 'book',
    game: 'game',
    other: 'other'
}
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: path.home, component: WelcomePageComponent },
    { path: path.anime, component: AnimesComponent },
    { path: path.animeDetail, component: AnimeDetailComponent },
    { path: path.film, component: FilmsComponent },
    { path: path.book, component: BooksComponent },
    { path: path.manga, component: MangasComponent },
    { path: path.game, component: GamesComponent },
    { path: path.other, component: OtherComponent },
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
