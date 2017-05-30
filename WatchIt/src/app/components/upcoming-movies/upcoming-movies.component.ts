import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api/api.service';
import { IMovieResponse } from '../../interfaces/movie-response';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
	selector: 'app-upcoming-movies',
	templateUrl: './upcoming-movies.component.html',
	styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
	public carouselInterval: number = 7500;
	
	public _response: IMovieResponse;

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

	openDetails(id: number) {
		this.router.navigate(['/details', id]);
	}

	pauseCarousel(isOpen) {
		if (isOpen) {
			this.carouselInterval = 0;
		} else {
			this.carouselInterval = 7500;
		}
	}

}
