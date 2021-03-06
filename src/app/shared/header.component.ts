import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="row">
          <div (click)="startNewSearch.emit()" class="col s4 offset-s4 search-btn center-align">
              <span class="material-icons">search</span>
          </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  @Output() startNewSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
