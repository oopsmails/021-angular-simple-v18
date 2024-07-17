import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar3',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgStyle],
  templateUrl: './navbar3.component.html',
  styleUrl: './navbar3.component.scss'
})
export class NavBar3Component {

}
