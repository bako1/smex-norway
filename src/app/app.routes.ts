import { Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';

export const routes: Routes = [
    { path: 'post/:slug', component: BlogPostComponent },
    { path: '', redirectTo: 'post/hello-world', pathMatch: 'full' },
];
