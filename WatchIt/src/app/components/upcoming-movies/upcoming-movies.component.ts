import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieResponse } from '../../interfaces/movie-response';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
	selector: 'app-upcoming-movies',
	templateUrl: './upcoming-movies.component.html',
	styleUrls: ['./upcoming-movies.component.scss'],
	providers: [{provide: CarouselConfig, useValue: {interval: 7000, noPause: true}}]
})
export class UpcomingMoviesComponent implements OnInit {
	public _response: IMovieResponse;
	private _imgPath = 'https://image.tmdb.org/t/p/original';

	constructor(private apiService: APIService, private router: Router) { }

ngOnInit() {
	this.apiService.getUpcomingMovies()
		.subscribe((next) => {
		this._response = next;
	})
}

get response(): IMovieResponse {
	return this._response;
}

set response(response: IMovieResponse) {
	this._response = response;
}

get imgPath(): string {
	return this._imgPath;
}

set imgPath(imgPath: string) {
	this._imgPath = imgPath;
}

openDetails(id: number) {
	this.router.navigate(['/details', id]);
}

}
