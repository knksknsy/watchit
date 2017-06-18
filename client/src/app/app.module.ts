import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// ngx-bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { PopularMoviesViewComponent } from './components/popular-movies-view/popular-movies-view.component';
import { MenuComponent } from './components/menu/menu.component';
import { DiscoverViewComponent } from './components/discover-view/discover-view.component';
import { FavoritesViewComponent } from './components/favorites-view/favorites-view.component';
import { WatchListViewComponent } from './components/watch-list-view/watch-list-view.component';
import { MovieListsViewComponent } from './components/movie-lists-view/movie-lists-view.component';
import { MovieListViewComponent } from './components/movie-list-view/movie-list-view.component';
import { SearchMoviesViewComponent } from './components/search-movies-view/search-movies-view.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ListModalComponent } from './components/list-modal/list-modal.component';
import { MovieDetailsCardComponent } from './components/movie-details-card/movie-details-card.component';
import { MovieDetailsCastComponent } from './components/movie-details-cast/movie-details-cast.component';
import { MovieDetailsFactsComponent } from './components/movie-details-facts/movie-details-facts.component';
import { LoginComponent } from './components/login/login.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { WatchListButtonComponent } from './components/watch-list-button/watch-list-button.component';
import { MovieListRemoveButtonComponent } from './components/movie-list-remove-button/movie-list-remove-button.component';
import { MovieListCardComponent } from './components/movie-list-card/movie-list-card.component';

// services
import { AuthenticationService } from './services/authentication/authentication.service';
import { APIService } from './services/api/api.service';
import { MovieListService } from './services/movie-list.service';
import { WatchListService } from './services/watch-list.service';
import { FavoritesService } from './services/favorites.service';
import { ViewComponentService } from './services/view-component.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MenuBarComponent,
    SearchMoviesViewComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    HomeViewComponent,
    UpcomingMoviesComponent,
    PopularMoviesViewComponent,
    MovieDetailsCardComponent,
    MovieDetailsCastComponent,
    MovieDetailsFactsComponent,
    MenuComponent,
    DiscoverViewComponent,
    LoginModalComponent,
    ListModalComponent,
    FavoritesViewComponent,
    WatchListViewComponent,
    MovieListsViewComponent,
    MovieListViewComponent,
    LoginComponent,
    FavoriteButtonComponent,
    WatchListButtonComponent,
    MovieListRemoveButtonComponent,
    MovieListCardComponent
  ],
  providers: [
    APIService,
    FavoritesService,
    WatchListService,
    MovieListService,
    AuthenticationService,
    ViewComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
