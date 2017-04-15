import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasQuery: boolean;
  query: string;

  constructor(private router: Router) { }

  searchQuery(query) {
    this.hasQuery = query.length > 0;
    this.hasQuery ? this.query = query : this.query = undefined;
    this.router.navigate(['/search', query]);
  }
}
