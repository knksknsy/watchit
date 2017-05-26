import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  query: string;
  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();
  public leftMenuCollapsed: boolean = false;

  constructor() { }

  onSearch() {
    this.search.emit(this.query);
  }

  ngOnInit() { }

  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }

	// make body position fixed (no scrolling) when menu is opened
	lockBodyScroll(){
		let body = document.getElementsByTagName('body')[0];
		if(this.leftMenuCollapsed){
			body.classList.add("stopScrolling");
		}else{
			body.classList.remove("stopScrolling");
		}
	}

}
