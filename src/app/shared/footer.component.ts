import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer">
      <div class="container">
          <div class="row">
              <div class="col l6 s12">
                  <h5 class="white-text">
                      Database provided by
                      <a href="https://www.themoviedb.org" target="_blank">
              The Movie DB
            </a>
                  </h5>
              </div>
          </div>
      </div>
      <div class="footer-copyright">
          <div class="container">
              Designed and Developer by Leon Watson
          </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
