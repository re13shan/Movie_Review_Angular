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
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckbox } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  imports: [HeaderComponent, MatFormField, MatLabel, MatButtonModule, MatInputModule, RouterLink, FormsModule, ReactiveFormsModule, MatSnackBarModule, CommonModule, MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule]
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
  likings: FormGroup = this.formbuild.group({
    like: false,
    dislike: false,
  });

  ngOnInit(): void {

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
  // saveReview() {
  //   var formValue = this.movieForm.value;

  //   console.log(formValue.review);
  //   this.movieService
  //     .updateReview(this.movie._id || '', formValue.review)
  //     .subscribe((res) => (this.movie = res));
  // }
  saveReview() {
    const movieId = this.movie._id;
    const newReview = this.movieForm.value.review;
    const userName = this.movieForm.value.name;
    const like = this.likings.value.like;
    const disLike = this.likings.value.disLike;
    // if (like) {
    //   console.log("liked");
    // }
    // else {
    //   console.log("disliked");
    // }
    this.movieService.updateReview(movieId, newReview, userName, like)
      .subscribe((res) => {
        this.movie = res; // Assuming the response contains updated movie data
        console.log('Review updated successfully:', res);
      }, (error) => {
        console.error('Failed to update review:', error);
      });
    window.location.reload();
  }

}
