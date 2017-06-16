import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginComponent } from './components/login/login.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { SearchMoviesViewComponent } from './components/search-movies-view/search-movies-view.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DiscoverViewComponent } from './components/discover-view/discover-view.component';
import { MovieListsViewComponent } from './components/movie-lists-view/movie-lists-view.component';
import { WatchListViewComponent } from './components/watch-list-view/watch-list-view.component';
import { FavoritesViewComponent } from './components/favorites-view/favorites-view.component';

// guards
import { AuthGuard } from './guards/auth.guard';

// resolvers
import { MovieDetailsResolverService } from './services/resolver/movie-details-resolver.service';
import { SearchMoviesResolverService } from './services/resolver/search-movies-resolver.service';
import { FavoritesResolverService } from './services/resolver/favorites-resolver.service';
import { MovieListsResolverService } from './services/resolver/movie-lists-resolver.service';
import { WatchListResolverService } from './services/resolver/watch-list-resolver.service';
import { PopularMoviesResolverService } from './services/resolver/popular-movies-resolver.service';
import { UpcomingMoviesResolverService } from './services/resolver/upcoming-movies-resolver.service';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeViewComponent,
        resolve: {
            upcomings: UpcomingMoviesResolverService,
            populars: PopularMoviesResolverService
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        resolve: {
            populars: PopularMoviesResolverService
        }
    },
    {
        path: 'search/:query',
        component: SearchMoviesViewComponent,
        resolve: {
            response: SearchMoviesResolverService
        }
    },
    {
        path: 'details/:id',
        component: MovieDetailsComponent,
        resolve: {
            details: MovieDetailsResolverService
        }
    },
    {
        path: 'discover',
        component: DiscoverViewComponent
    },
    {
        path: 'favorites',
        component: FavoritesViewComponent,
        canActivate: [AuthGuard],
        resolve: {
            favorites: FavoritesResolverService
        }
    },
    {
        path: 'watchlist',
        component: WatchListViewComponent,
        resolve: {
            favorites: WatchListResolverService
        }
    },
    {
        path: 'lists',
        component: MovieListsViewComponent,
        resolve: {
            favorites: MovieListsResolverService
        }
    }
    // { 
    //   path: '',
    //   redirectTo: '/component_name',
    //   pathMatch: 'full'
    // }
    // {
    //   path: '/component_name',
    //   component: ComponentName,
    //   data: { property: 'idk' }
    // }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        UpcomingMoviesResolverService,
        PopularMoviesResolverService,
        SearchMoviesResolverService,
        MovieDetailsResolverService,
        FavoritesResolverService,
        WatchListResolverService,
        MovieListsResolverService,
        AuthGuard
    ]
})
export class AppRoutingModule { }
