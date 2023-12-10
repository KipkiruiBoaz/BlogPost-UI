import { Component } from '@angular/core';
import { blogpost } from '../models/blogpost.model';
import { BlogpostService } from '../services/blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.scss']
})
export class BlogpostListComponent {

  title:string="This is a blogpost list";

  blogposts: blogpost[]=[];

  constructor(private blogpostservice:BlogpostService) { }
  ngOnInit(): void {
    this.blogpostservice.getAllBlogposts()
      .subscribe({
        next: (response) => {
          
          this.blogposts = response
          console.log('blogposts',this.blogposts)
        }
        
     
      })
    }}
