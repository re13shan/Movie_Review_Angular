import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { LoadService } from '../services/load.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  imports: [HeaderComponent, MatFormField, MatLabel, MatButtonModule, MatInputModule, RouterLink, FormsModule, ReactiveFormsModule, MatSnackBarModule, CommonModule]
})
export class MoviesComponent {

  type = '';
  _id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: LoadService) { }
  formbuild = inject(FormBuilder);

  movieForm: FormGroup = this.formbuild.group({
    name: [''],
    review: [''],
  });


  // review = '';



  ngOnInit(): void {
    //this.type = this.route.snapshot.params['type'];
    this._id = this.route.snapshot.params['_id'];

    this.getMovie();
  }
  getMovie() {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { _id: string }) => movie._id == this._id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
  saveReview() {
    var formValue = this.movieForm.value;

    console.log(formValue.review);
    this.movieService
      .updateReview(this.movie._id || '', formValue.review)
      .subscribe((res) => (this.movie = res));
  }

}
