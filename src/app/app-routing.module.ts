import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AnimesComponent } from './components/animes/animes.component';
import { FilmsComponent } from './components/films/films.component';
import { BooksComponent } from './components/books/books.component';
import { MangasComponent } from './components/mangas/mangas.component';
import { GamesComponent } from './components/games/games.component';
import { OtherComponent } from './components/other/other.component';
import { LoginComponent } from './components/login/login.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { NavBarCustomComponent } from './components/nav-bar-custom/nav-bar-custom.component';
import { AppBarCustomComponent } from './components/app-bar-custom/app-bar-custom.component';
import { AddAnimeFormComponent } from './components/add-anime-form/add-anime-form.component';

export const path = {
    login: 'login',
    home: 'home',
    anime: 'anime',
    addAnime: 'anime/add',
    animeDetail: 'anime/:id',
    film: 'film',
    manga: 'manga',
    book: 'book',
    game: 'game',
    other: 'other'
}
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: path.login, component: LoginComponent },
    { path: path.home, component: WelcomePageComponent },
    { path: path.anime, component: AnimesComponent },
    { path: path.addAnime, component: AddAnimeFormComponent },
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
    NotFoundComponent,
    NavBarCustomComponent,
    AppBarCustomComponent,
    AddAnimeFormComponent
];
