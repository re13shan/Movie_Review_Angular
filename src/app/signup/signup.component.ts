import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignupVerifyService } from '../services/signup-verify.service';
import { UserInfo } from '../services/user-info';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink, JsonPipe, MatFormFieldModule, RouterModule, MatSnackBarModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private route: Router, private http: HttpClient, private signupService: SignupVerifyService) { }
  formbuild = inject(FormBuilder);

  signupForm: FormGroup = this.formbuild.group({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });
  register() {
    const user: UserInfo = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password1,
    };
    console.log(user);
    this.signupService.onSubmit(user).subscribe((res) => {
      this.route.navigateByUrl('/');
    });
  }

}