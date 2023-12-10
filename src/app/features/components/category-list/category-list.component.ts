import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { category } from '../models/categories.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  title:string="Add Category";

  categories: category[]=[];

  constructor(private categoryservice: CategoryService) { }
  ngOnInit(): void {
    this.categoryservice.getAllCategories()
      .subscribe({
        next: (response) => {
          
          this.categories = response
          console.log('categories',this.categories)
        }
        
     
      })
  }
}
