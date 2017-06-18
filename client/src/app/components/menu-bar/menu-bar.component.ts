import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  public menuCollapsed: boolean = false;

  public searchForm = this.formBuilder.group({
    searchQuery: ["", Validators.minLength(1)]
  });

  constructor(private formBuilder: FormBuilder) { }

  onSearch() {
    this.search.emit(this.searchForm.value);
    this.menuCollapsed = false;
  }

  ngOnInit() { }

  public collapsed(event:any):void { }
 
  public expanded(event:any):void { }

	// make body position fixed (no scrolling) when menu is opened
	lockBodyScroll(){
		let body = document.getElementsByTagName('body')[0];
		if(this.menuCollapsed){
			body.classList.add("stopScrolling");
		}else{
			body.classList.remove("stopScrolling");
		}
	}

}
