import { Component } from '@angular/core';
import { APIService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: any;

  constructor(private apiService: APIService) { }

  searchQuery(query) {
    this.apiService.searchMovie(query)
      .subscribe((next) => {
        this.query = JSON.stringify(next.text(), null, 4);
      },
      (err) => {
        this.query = err;
      },
      () => {
        console.log('complete');
      });
  }
}
