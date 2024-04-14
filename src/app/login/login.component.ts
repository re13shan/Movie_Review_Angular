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
import { LoginVerifyService } from '../services/login-verify.service';
import { Login, LoginResponce } from '../services/login';
import { LoadService } from '../services/load.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink, JsonPipe, MatFormFieldModule, RouterModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private route: Router, private http: HttpClient, private loginService: LoginVerifyService, private load: LoadService) { }
  formbuild = inject(FormBuilder);

  loginForm: FormGroup = this.formbuild.group({
    email: '',
    password: '',
  });
  loginResponce: LoginResponce = {};
  login() {
    const login: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(login);
    this.loginService.authUser(login).subscribe(async (res) => {
      this.loginResponce = res;
      localStorage.setItem("token", this.loginResponce.token ?? '');
      if (this.loginResponce.success) {
        console.log(this.loginResponce);
        localStorage.setItem('username', this.loginResponce.name ?? '');
        this.route.navigateByUrl("/home");
      }
      else {
        alert('Invalide User-Name or Password');
      }
    }
    );
  }
}