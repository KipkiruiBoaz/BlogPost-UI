import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../services/blogpost.service';
import { blogpost } from '../models/blogpost.model';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.scss']
})
export class EditBlogpostComponent implements OnInit{
  id:string |null=null;
  model?:blogpost;


constructor(private route:ActivatedRoute,private blogpostService:BlogpostService){

}


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id')

        //get blogpost from api
        if(this.id){
        this.blogpostService.getBlogpostById(this.id).subscribe({
          next:(response)=>{
            this.model=response
          }
        })

      } }

  })
  }
  onFormSubmit():void{}
}
