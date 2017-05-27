import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-discover-view',
	templateUrl: './discover-view.component.html',
	styleUrls: ['./discover-view.component.scss']
})
export class DiscoverViewComponent implements OnInit {

	public oneAtATime: boolean = true;
	public isFirstOpen: boolean = true;

	//var selectedGenreArry : { [genre:string]:number; } = {};
	selectedGenreArry = [];

constructor() { }

ngOnInit() {
}

/*updateSelectedGenreArray(id: number){
	console.log("inside updateSelectedGenreArray -> " + this.selectedGenreArry.length);
	var isFound: boolean = false;

	for(var i = this.selectedGenreArry.length - 1; i >= 0; i--) {
		if(this.selectedGenreArry[i] === id) {
			this.selectedGenreArry.splice(i, 1);
			isFound = true;
			console.log("Id: " + id + " wurde entfernt.");
		}
	}
	if(!isFound){
		this.selectedGenreArry.push(id);
		console.log("Id: " + id + " wurde hinzugefügt.");
	}
	
	console.log("selectedGenreArry: " + this.selectedGenreArry);
}*/
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

}
