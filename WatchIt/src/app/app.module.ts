import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SearchMoviesViewComponent } from './components/search-movies-view/search-movies-view.component';
import { SearchMovieCardComponent } from './components/search-movie-card/search-movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { PopularMovieCardComponent } from './components/popular-movie-card/popular-movie-card.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { PopularMoviesViewComponent } from './components/popular-movies-view/popular-movies-view.component';
import { MovieDetailsCardComponent } from './components/movie-details-card/movie-details-card.component';
import { MovieDetailsCastComponent } from './components/movie-details-cast/movie-details-cast.component';
import { MovieDetailsFactsComponent } from './components/movie-details-facts/movie-details-facts.component';
import { MenuComponent } from './components/menu/menu.component';

// services
import { APIService } from './services/api/api.service';
import { DiscoverViewComponent } from './components/discover-view/discover-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),
	CollapseModule.forRoot(),
	AccordionModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MenuBarComponent,
    SearchMoviesViewComponent,
    SearchMovieCardComponent,
    MovieDetailsComponent,
    HomeViewComponent,
    PopularMovieCardComponent,
    UpcomingMoviesComponent,
    PopularMoviesViewComponent,
    MovieDetailsCardComponent,
    MovieDetailsCastComponent,
    MovieDetailsFactsComponent,
    MenuComponent,
    DiscoverViewComponent
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
