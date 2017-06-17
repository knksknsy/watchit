import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieResponse } from '../../interfaces/movie-response';

@Component({
	selector: 'app-upcoming-movies',
	templateUrl: './upcoming-movies.component.html',
	styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent {
	public carouselInterval: number = 7500;
	public isCarouselPaused: boolean;

	private _data: IMovieResponse;

	get data(): IMovieResponse {
		return this._data;
	}

	@Input()
	set data(data: IMovieResponse) {
		this._data = data;
	}

	constructor(private apiService: APIService, private router: Router) { }

	openDetails(id: number) {
		this.router.navigate(['/details', id]);
	}

	pauseCarousel(isOpen) {
		this.isCarouselPaused = isOpen;
		if (isOpen) {
			this.carouselInterval = 0;
		} else {
			this.carouselInterval = 7500;
		}
	}

}
