import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // constructor(private auth: AuthorService, private router: Router) { }
  // username = "";
  // password = "";
  // errorMsg = "";
  // login() {
  //   if (this.username.trim().length === 0) {
  //     this.errorMsg = "Email Required";
  //   }
  //   else if (this.password.trim().length === 0) {
  //     this.errorMsg = "Password Required";
  //   }
  //   else {
  //     this.errorMsg = "";
  //     let res = this.auth.login(this.username, this.password);
  //     if (res === 200) {
  //       this.router.navigate(['home']);
  //     }
  //     if (res === 403) {
  //       this.errorMsg = "Invalid Credentials";
  //     }
  //   }
  // }
}