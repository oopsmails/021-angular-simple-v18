import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },

    {
        path: 'usersearch',
        component: UserSearchComponent,
    },

];
