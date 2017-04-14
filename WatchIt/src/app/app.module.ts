import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { APIService } from './services/api/api.service';
import { SearchMoviesViewComponent } from './components/search-movies-view/search-movies-view.component';

const appRoutes: Routes = [
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
  declarations: [
    AppComponent,
    MenuBarComponent,
    SearchMoviesViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot()
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
