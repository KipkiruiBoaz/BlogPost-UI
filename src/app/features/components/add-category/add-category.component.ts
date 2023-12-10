import { Component } from '@angular/core';
import { addCategoryRequest } from '../models/addCategoryRequest';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  //category:string[]=['a','b'];
  
  model:addCategoryRequest;

  constructor(private categoryService:CategoryService,private router:Router){
    this.model={
      name :'',
      urlHandle:'',
    };
  }


onFormSubmit(){
  this.categoryService.addCategory(this.model)
  .subscribe({
    next:(response)=> {
      console.log('Success');
      this.router.navigate(['admin/categories'])
    }
  })
}
}
