import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeViewComponent } from './components/home-view/home-view.component';
import { SearchMoviesViewComponent } from './components/search-movies-view/search-movies-view.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DiscoverViewComponent } from './components/discover-view/discover-view.component';
import { MovieListsViewComponent } from './components/movie-lists-view/movie-lists-view.component';
import { WatchListViewComponent } from './components/watch-list-view/watch-list-view.component';
import { FavoritesViewComponent } from './components/favorites-view/favorites-view.component';

// resolvers
import { MovieDetailsResolverService } from './services/resolver/movie-details-resolver.service';
import { SearchMoviesResolverService } from './services/resolver/search-movies-resolver.service';
import { FavoritesResolverService } from './services/resolver/favorites-resolver.service';
import { MovieListsResolverService } from './services/resolver/movie-lists-resolver.service';
import { WatchListResolverService } from './services/resolver/watch-list-resolver.service';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeViewComponent
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
        path: 'discover-view',
        component: DiscoverViewComponent
    },
    {
        path: 'favorites-view',
        component: FavoritesViewComponent,
        resolve: {
            favorites: FavoritesResolverService
        }
    },
    {
        path: 'watch-list-view',
        component: WatchListViewComponent,
        resolve: {
            favorites: WatchListResolverService
        }
    },
    {
        path: 'movie-lists-view',
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
        MovieDetailsResolverService,
        SearchMoviesResolverService
    ]
})
export class AppRoutingModule { }
