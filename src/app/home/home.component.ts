import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, HeaderComponent]
})
export class HomeComponent implements OnInit {


  popularMovies: any;

  constructor(private http: HttpClient, private router: Router, private movieService: LoadService) { }

  // ngOnInit(): void {

  //   this.getPopularMovies();
  // }

  // getPopularMovies() {
  //   this.http
  //     .get('http://localhost:4200/assets/data/popular-movies.json')
  //     .subscribe((movies) => {
  //       this.popularMovies = movies;
  //     });
  // }

  goToMovie(_id: string) {
    this.router.navigate(['movies', _id]);
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((res) => {
      this.popularMovies = res;
      console.log(this.popularMovies);
    });
  }

}