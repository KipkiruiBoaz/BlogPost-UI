import { Component } from '@angular/core';
import { AddBlogPostRequest } from '../models/add-blogpost-request';
import { CategoryService } from '../../components/services/category.service';
import { BlogpostService } from '../services/blogpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss']
})
export class AddBlogPostComponent {
  model:AddBlogPostRequest;
  constructor(private Blogpostservice:BlogpostService,private router:Router){
    this.model={
      title:'',
      shortDescription:'',
      content:'',
      featuredImageUrl:'',
      urlHandle:'',
      author:'',
      isVisible:true,
      publishedDate:new Date()
      

    }
  }

onFormSubmit(){
  this.Blogpostservice.addBlogpost(this.model)
    .subscribe({
      next:(response) => {
       this.router.navigateByUrl('admin/blogpost')
      }
    })
    }
  }