import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthenticationService } from './services/authentication.service';
export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "home",
        component: HomeComponent, canActivate: [AuthenticationService]
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "movies/:_id",
        component: MoviesComponent, canActivate: [AuthenticationService]
    }
];
