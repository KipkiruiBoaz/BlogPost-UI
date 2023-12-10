import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { category } from '../models/categories.model';
import { UpdateCategoryRequest } from '../models/updateCategoryRequest';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit,OnDestroy {
  id:string |null=null;
  paramsSubscription?:Subscription;
  Category?:category;

  constructor(private route:ActivatedRoute,private categoryService:CategoryService){

  }
  
  ngOnInit(): void {
    this.paramsSubscription=this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id');
        if(this.id){
          //get data from the api for this category id
           this.categoryService.getCategory(this.id)
           .subscribe({
            next:(response)=>{
              this.Category=response;
            }
            } )
        }
      }
    });
  }
  onFormSubmit():void {
    const updateCategoryRequest:UpdateCategoryRequest={
      Name:this.Category?.name??'',
      UrlHandle:this.Category?.urlHandle??'',
    };
  }
  ngOnDestroy(): void {
  this.paramsSubscription?.unsubscribe
  }

}
