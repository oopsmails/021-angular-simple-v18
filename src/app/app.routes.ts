import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
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
    {
        path: 'posts',
        component: PostsComponent,
    },

];
