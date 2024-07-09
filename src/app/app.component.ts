import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, HomeComponent, UserSearchComponent],
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent { }
