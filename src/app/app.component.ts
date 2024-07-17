import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar1Component } from './components/navbar1/navbar1.component';
import { NavBar2Component } from './components/navbar2/navbar2.component';
import { NavBar3Component } from './components/navbar3/navbar3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, HomeComponent, UserSearchComponent],
  imports: [RouterOutlet, NavBar1Component, NavBar2Component, NavBar3Component],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }
