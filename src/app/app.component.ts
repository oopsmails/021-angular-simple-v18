import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar2Component } from './components/navbar2/navbar2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, HomeComponent, UserSearchComponent],
  imports: [RouterOutlet, NavBar2Component],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }
