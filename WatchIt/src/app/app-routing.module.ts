import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './components/home-view/home-view.component';
import { SearchMoviesViewComponent } from './components/search-movies-view/search-movies-view.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const appRoutes: Routes = [
    { path: '', component: HomeViewComponent },
    { path: 'search/:query', component: SearchMoviesViewComponent },
    { path: 'details/:id', component: MovieDetailsComponent }
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
    ]
})
export class AppRoutingModule { }
