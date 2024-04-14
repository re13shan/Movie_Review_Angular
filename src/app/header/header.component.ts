import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { MatButtonModule } from '@angular/material/button';
import { Login } from '../services/login';
import { LoginVerifyService } from '../services/login-verify.service';
import { LoginComponent } from '../login/login.component';
import { LoadService } from '../services/load.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  names1: any;
  names2: any;
  constructor(private router: Router, private loginService: LoginVerifyService, private load: LoadService) { }

  //log: LoginComponent | any;
  ngOnInit(): void {
    this.names1 = localStorage.getItem('username');
    console.log(this.names1);
  }


  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.router.navigateByUrl('/');
  }
}
