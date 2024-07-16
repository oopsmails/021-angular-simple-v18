import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgStyle],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.scss'
})
export class NavBar2Component {
  menu = false;
  setMenu() {
    this.menu = !this.menu;
  }

  closeMenu() {
    this.menu = false;
  }

  handleChange() {
    this.setMenu();
  }
}
