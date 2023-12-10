import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/components/category-list/category-list.component';
import { AddCategoryComponent } from './features/components/add-category/add-category.component';
//import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCategoryComponent } from './features/components/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/BlogPosts/blogpost-list/blogpost-list.component';
import { AddBlogPostComponent } from './features/BlogPosts/add-blog-post/add-blog-post.component';
import { LoginComponent } from './features/auth/login/login.component';
import { EditBlogpostComponent } from './features/BlogPosts/edit-blogpost/edit-blogpost.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent

  },
  {
    path: 'admin/categories',
    component: CategoryListComponent,
  },

  {
    path: 'admin/categories/add',
    component: AddCategoryComponent,
  },
  /* {
    path: '**',
    component: NotFoundComponent,
  }, */
  {
    path:'admin/categories/:id',
    component:EditCategoryComponent
  },
  {
    path:'admin/blogpost',
    component:BlogpostListComponent
  },
  {
    path:'admin/blogpost/add',
    component:AddBlogPostComponent
  },
  {
    path:'admin/blogpost/:id',
    component:EditBlogpostComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
