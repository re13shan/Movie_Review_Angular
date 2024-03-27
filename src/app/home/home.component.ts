import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { AuthorService } from '../services/author.service';
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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.getPopularMovies();
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(id: string) {
    this.router.navigate(['movies', id]);
  }

}