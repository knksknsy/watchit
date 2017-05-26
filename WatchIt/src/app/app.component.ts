import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string;

  constructor(private router: Router) { }

  searchQuery(query) {
    if (query.searchQuery) {
      this.router.navigate(['/search', query.searchQuery]);
    }
  }
}
