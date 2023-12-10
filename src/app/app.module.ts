import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './features/components/category-list/category-list.component';
import { AddCategoryComponent } from './features/components/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EditCategoryComponent } from './features/components/edit-category/edit-category.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogpostListComponent } from './features/BlogPosts/blogpost-list/blogpost-list.component';
import { AddBlogPostComponent } from './features/BlogPosts/add-blog-post/add-blog-post.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ImageSelectorComponent } from './shared/components/image-selector/image-selector.component';
import { EditBlogpostComponent } from './features/BlogPosts/edit-blogpost/edit-blogpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    NotFoundComponent,
    BlogpostListComponent,
    AddBlogPostComponent,
    LoginComponent,
    ImageSelectorComponent,
    EditBlogpostComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
