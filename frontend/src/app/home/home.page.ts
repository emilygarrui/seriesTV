import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  title: string = "The Witcher";
  genre: string = "Fantasy";

  constructor(private router: Router) { }

  goToMySeries() {
    this.router.navigateByUrl("/my-series");
  }

}
