import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: { title: 'Blog List' }
  },
  {
    path: 'blog-details/:id',
    component: DetailsBlogComponent,
    data: { title: 'Blog Details' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
