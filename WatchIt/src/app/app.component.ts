import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasQuery: boolean;
  query: string;

  constructor() { }

  searchQuery(query) {
    this.hasQuery = query.length > 0;
    this.hasQuery ? this.query = query : this.query = undefined;
  }
}
