import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavBarComponent {
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
