import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api/api.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() { }

}
