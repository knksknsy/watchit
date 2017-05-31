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

	public selectedGenreArry = [];

	public yearTill: number;
	public yearFrom: number;
	public year: number;

	public max:number = 10;
	public rate:number = 7;

	public selectedValue: string = "release_date.asc";

	public _response: IMovieResponse;

	public pageIndex = 0;
	public totalMovieItems: number;
	public movieItemsPerPage = 20;
	public maxSize = 10;
	public directionLinks: boolean = true;

	constructor(private apiService: APIService) { }

	ngOnInit() {
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

public onPageChanged(event) {
	this.pageIndex = event.page;
	this.directionLinks = event.page >= 1000 ? false : true;
	this.searchDiscoverMovies();
}

public onDiscover() {
	this.searchDiscoverMovies();
}


searchDiscoverMovies(){
	console.log('pageIndex', this.pageIndex);
	var dTill = new Date();
	dTill.setFullYear(this.yearTill, 0, 1);
	var dateTill = dTill.getTime();
	var dFrom = new Date();
	dFrom.setFullYear(this.yearFrom, 0, 1);
	let dateFrom = dFrom.getTime();
	
	var genreString = this.selectedGenreArry.toString();
	console.log(genreString);
		
    this.apiService.getDiscoverMovies(this.selectedValue, dateFrom, dateTill, this.rate, genreString, this.year, this.pageIndex === 0 ? 1 : this.pageIndex)
      .subscribe((next) => {
        this._response = next;
		this.totalMovieItems = next.total_results;
		console.log(this._response);
      })
}

get response(): IMovieResponse {
    return this._response;
  }

  set response(response: IMovieResponse) {
    this._response = response;
  }

}
