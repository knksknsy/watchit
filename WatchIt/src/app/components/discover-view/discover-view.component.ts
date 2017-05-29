import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api/api.service';
import { IMovieResponse } from '../../interfaces/movie-response';

@Component({
	selector: 'app-discover-view',
	templateUrl: './discover-view.component.html',
	styleUrls: ['./discover-view.component.scss']
})
export class DiscoverViewComponent implements OnInit {

	public oneAtATime: boolean = true;
	public isFirstOpen: boolean = true;

	selectedGenreArry = [];

	yearTill: number;
	yearFrom: number;
	year: number;

	public max:number = 10;
	public rate:number = 7;

	selectedValue: string = "release_date.asc";

	public _response: IMovieResponse;


	constructor(private apiService: APIService) { }

	ngOnInit() {
	    this.apiService.getDiscoverMovies(this.selectedValue)
      .subscribe((next) => {
        this._response = next;
			console.log(this._response);
      })
	}


updateSelectedGenreArray(id: number, cssId: string){
	console.log("inside updateSelectedGenreArray -> " + this.selectedGenreArry.length);
	var isFound: boolean = false;
	let element = document.getElementById(cssId);

	for(var i = this.selectedGenreArry.length - 1; i >= 0; i--) {
		if(this.selectedGenreArry[i] === id) {
			this.selectedGenreArry.splice(i, 1);
			isFound = true;
			element.classList.remove("selectedGenre");
			console.log("Id: " + id + " wurde entfernt.");
		}
	}
	if(!isFound){
		this.selectedGenreArry.push(id);
		element.classList.add("selectedGenre");
		console.log("Id: " + id + " wurde hinzugefügt.");
	}

	console.log("selectedGenreArry: " + this.selectedGenreArry);
}

get response(): IMovieResponse {
    return this._response;
  }

  set response(response: IMovieResponse) {
    this._response = response;
  }


}
