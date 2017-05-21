import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-view',
  templateUrl: './discover-view.component.html',
  styleUrls: ['./discover-view.component.scss']
})
export class DiscoverViewComponent implements OnInit {
	
  public oneAtATime: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
