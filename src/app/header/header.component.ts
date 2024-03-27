import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private auth: AuthorService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }
}
