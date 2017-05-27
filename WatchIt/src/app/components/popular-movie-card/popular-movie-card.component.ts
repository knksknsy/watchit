import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieResult } from '../../interfaces/movie-response';
import { APIService } from '../../services/api/api.service';

@Component({
	selector: 'app-popular-movie-card',
	templateUrl: './popular-movie-card.component.html',
	styleUrls: ['./popular-movie-card.component.scss']
})
export class PopularMovieCardComponent {
	private _data: IMovieResult;
	private _removable: boolean;

	constructor(private apiService: APIService, private router: Router) { }

	get data(): IMovieResult {
		return this._data;
	}

	@Input()
	set data(data: IMovieResult) {
		this._data = data;
	}

	@Input()
	set removable(removable: boolean) {
		this._removable = removable;
	}

	get removable(): boolean {
		return this._removable;
	}

	openDetails(id: number) {
		this.router.navigate(['/details', id]);
	}

	toggleFavorite() {
		// todo: create service for method
	}

	removeFromList() {
		// todo: create service for method
	}

	addToList() {
		// todo: create service for method
	}

}
