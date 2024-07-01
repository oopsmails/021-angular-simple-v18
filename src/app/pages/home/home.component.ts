import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserSearchComponent } from '../../user-search/user-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, UserSearchComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
