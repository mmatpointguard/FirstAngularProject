import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold
  is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Coming Soon</h1> 
      </div>
   </div>
  </section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/photo.jpg') !important;
    background-size:cover;
    background-position: center center;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
